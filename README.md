# Consulta Comunidade

Sistema web desenvolvido para auxiliar equipes de campo na consulta de ligações de água.

---

## Objetivo

Permitir consultas rápidas utilizando:

- Matrícula
- Nome do cliente
- Número do hidrômetro

Apresentando informações como:

- Nome
- Matrícula
- Endereço
- Bairro
- Grupo
- Quantidade de economias
- Hidrômetro
- Latitude
- Longitude

Além de permitir abrir a localização diretamente no Google Maps.

---

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- JSON
- Git
- GitHub
- Netlify

---

## Estrutura do Projeto
consulta-comunidade/

├── css/

├── js/

├── data/

├── assets/

└── docs/

---

## Fluxo de funcionamento

1. O sistema carrega o arquivo JSON.
2. O usuário realiza uma pesquisa.
3. O JavaScript procura o registro correspondente.
4. As informações são exibidas em um card.
5. Caso existam coordenadas válidas, o usuário poderá abrir a localização no Google Maps.

---

## Padrão de Commits

Este projeto utiliza o padrão Conventional Commits.

| Prefixo | Significado |
|----------|-------------|
| feat | Nova funcionalidade |
| fix | Correção de bugs |
| style | Alterações visuais |
| refactor | Reorganização do código |
| docs | Documentação |
| chore | Manutenção do projeto |

### Exemplos

```bash
git commit -m "feat: adiciona pesquisa por hidrômetro"

git commit -m "style: cria layout responsivo"

git commit -m "fix: corrige pesquisa por matrícula"

git commit -m "docs: atualiza README"

git commit -m "refactor: reorganiza funções de busca"

Autor

Victor Trip


---

# CHANGELOG.md

```markdown
# Changelog

Todas as alterações importantes deste projeto serão registradas aqui.

---

## v0.1.0

### Adicionado

- Estrutura inicial do projeto.
- Configuração do Git.
- Configuração do GitHub.
- Organização das pastas.
- Documentação inicial.

---

## Próxima versão

- Tela inicial
- Pesquisa inteligente
- Exibição dos cards