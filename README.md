# Weather App — Mini Forecast (HTML/CSS/JS)

Mini aplicativo de previsão do tempo feito com **HTML, CSS e JavaScript**, com busca por cidade e exibição de **temperatura, umidade e velocidade do vento**.

## 🔗 Links

- Repositório: https://github.com/NETONoHands/weather-app 
- Live demo: *(adicione aqui o link do GitHub Pages, se quiser destacar)* 

## ✨ Funcionalidades

- Buscar clima por **nome da cidade** 
- Exibir **temperatura**, **umidade** e **velocidade do vento** 
- Ícone do clima muda automaticamente conforme a condição (ex.: chuva, neve, céu limpo, nuvens) 
- Pesquisa pelo **botão** ou pressionando **Enter** 

## 🧰 Tecnologias

- HTML
- CSS
- JavaScript 

## 🧭 Como usar

### Opção 1 — Abrir localmente (mais simples)
1. Faça o clone do repositório:
   ```bash
   git clone https://github.com/NETONoHands/weather-app.git
   ```
2. Abra o arquivo `index.html` no navegador. 

### Opção 2 — Rodar com servidor estático (recomendado)
Você pode usar qualquer servidor simples (ex.: extensão “Live Server” do VS Code) para evitar problemas de caminhos/arquivos.

## 🔑 Configuração de API (se aplicável)

O projeto utiliza uma URL de API e uma chave (API_KEY) no `script.js`. Caso o clima não carregue, verifique/ajuste as constantes de API no arquivo `script.js`. 

## 🗂️ Estrutura do projeto

- `index.html` — estrutura do layout 
- `style.css` — estilos 
- `script.js` — lógica (fetch, renderização e troca de ícones) 
- `images/` — ícones (search, humidity, wind e estados do tempo) 

## 🗺️ Próximos passos (ideias)

- Adicionar estado de **loading/erro** na UI
- Melhorar acessibilidade (ex.: `label` no input, `alt` nos ícones, foco visível)
- Exibir também sensação térmica e previsão por horas/dias

## 📄 Licença

Escolha uma licença (ex.: MIT) ou mantenha como “All rights reserved”.
``
