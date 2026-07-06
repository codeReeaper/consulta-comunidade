/*
==========================================================

Projeto: Consulta Comunidade

Arquivo: app.js

Responsável por:
- Inicializar o sistema
- Carregar os dados do JSON
- Preparar a base de pesquisa em memória
- Conectar a interface com a lógica do sistema

Este é o "cérebro" inicial da aplicação.

==========================================================
*/

/*
    ================================
    VARIÁVEIS GLOBAIS DO SISTEMA
    ================================

    Aqui vamos guardar tudo que o sistema precisa
    para funcionar durante o uso.
*/
// Lista principal com todos os registros carregados do JSON
let baseDeDados = [];
// Guarda o que o usuário está digitando na pesquisa
let valorPesquisa = "";
// Referência do input de pesquisa no HTML
const inputPesquisa = document.getElementById("input-pesquisa");
// Referência da área de resultado
const areaResultado = document.getElementById("area-resultado");

/*
    ================================
    INICIALIZAÇÃO DO SISTEMA
    ================================
    Essa função roda assim que a página abre.
    Ela é responsável por preparar tudo.
*/
async function iniciarSistema() {
    try {
        // Mensagem no console para debug
        console.log("Sistema iniciado...");
        // Carrega o arquivo JSON com os dados
        const resposta = await fetch("data/dados.json");
        // Converte a resposta para JSON
        baseDeDados = await resposta.json();
        console.log("Dados carregados com sucesso:", baseDeDados.length, "registros");
        // Prepara eventos da interface
        prepararEventos();
    } catch (erro) {
        // Caso algo dê errado ao carregar os dados
        console.error("Erro ao carregar dados:", erro);
        areaResultado.innerHTML = `
            <div class="estado-inicial">
                <p class="mensagem-principal">Erro ao carregar dados</p>
                <p class="mensagem-secundaria">Verifique o arquivo JSON</p>
            </div>
        `;
    }
}

/*
    ================================
    EVENTOS DA INTERFACE
    ================================
    Aqui conectamos o input com a lógica do sistema.
*/
function prepararEventos() {
    /*
        Evento de digitação:
        Toda vez que o usuário digita, capturamos o valor
        e chamamos a função de busca.
    */
    inputPesquisa.addEventListener("input", function (evento) {
        valorPesquisa = evento.target.value;
        console.log("Usuário digitou:", valorPesquisa);
        // Aqui no futuro vamos chamar a função de busca
        // pesquisar(valorPesquisa);
    });
}

/*
    ================================
    FUNÇÃO DE BUSCA (BASE)
    ================================
    Por enquanto ainda não vamos implementar a busca completa.
    Primeiro queremos garantir que tudo está funcionando.
*/
function pesquisar(texto) {
    console.log("Buscando por:", texto);
    /*
        Futuramente aqui vamos:
        - Normalizar texto (remover acentos)
        - Verificar se é matrícula, nome ou hidrômetro
        - Filtrar baseDeDados
        - Retornar resultados
    */
}

/*
    ================================
    INICIALIZA O SISTEMA
    ================================
*/
// Quando o navegador terminar de carregar a página,
// o sistema começa a funcionar automaticamente.
window.addEventListener("DOMContentLoaded", iniciarSistema);