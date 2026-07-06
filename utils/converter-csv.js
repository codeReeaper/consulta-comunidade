/*
==========================================================

Projeto: Consulta Comunidade

Arquivo: converter-csv.js

Responsável por:
Converter o arquivo CSV exportado do SCAE/GSS em JSON limpo
para ser usado diretamente pelo sistema.

Esse script NÃO faz parte do site.
Ele é usado apenas para preparar a base de dados.

==========================================================
*/

// Biblioteca para ler arquivos CSV
const fs = require("fs");
const csv = require("csv-parser");
// Arquivo de entrada (CSV exportado do Excel/SCAE)
const arquivoEntrada = "data/dados.csv";
// Arquivo de saída (JSON final do sistema)
const arquivoSaida = "data/dados.json";
// Lista onde vamos armazenar os dados convertidos
let dados = [];

/*
==========================================================
FUNÇÃO: corrigirCoordenada
==========================================================

O problema do SCAE é que ele gera algo assim:

-22.918.145 ❌

E o correto seria:

-22.918145 ✔
*/
function corrigirCoordenada(valor) {
    if (!valor) return "";
    const partes = valor.toString().split(".");
    if (partes.length === 3) {
        return `${partes[0]}.${partes[1]}${partes[2]}`;
    }
    return valor;
}

/*
==========================================================
LEITURA DO CSV
==========================================================
*/
fs.createReadStream(arquivoEntrada)
    .pipe(csv())
    .on("data", (linha) => {
        /*
        ======================================================
        Aqui acontece a PADRONIZAÇÃO dos dados
        ======================================================
        */
        const registro = {
            num_ligacao: linha["NUM_LIGACAO"],
            nome: linha["NOME"],
            rua: linha["RUA"],
            numero: linha["NÚMERO"],
            complemento: linha["COMPLEMENTO"],
            bairro: linha["BAIRRO"],
            grupo: linha["GRUPO"],
            qtd_economias: linha["QTD DE ECONOMIAS"],
            hidrometro: linha["Nº DO HIDROMETRO"],
            posicao_hd: linha["POSIÇÃO HD"],
            // Corrigindo coordenadas automaticamente
            latitude: corrigirCoordenada(linha["LATITUDE"]),
            longitude: corrigirCoordenada(linha["LONGITUDE"])
        };
        dados.push(registro);
    })
    .on("end", () => {

        /*
        ======================================================
        ESCRITA DO JSON FINAL
        ======================================================
        */
        fs.writeFileSync(
            arquivoSaida,
            JSON.stringify(dados, null, 2),
            "utf-8"
        );
        console.log("✔ Conversão finalizada!");
        console.log("Registros convertidos:", dados.length);
        console.log("Arquivo gerado em:", arquivoSaida);
    });