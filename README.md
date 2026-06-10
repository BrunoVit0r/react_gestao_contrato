# ContractFlow Marketing - Projeto em React

Este projeto é uma landing page chamada **ContractFlow**, feita como atividade sobre o framework/biblioteca **React**. A ideia foi pegar uma página com aparência de site institucional e organizar ela de um jeito mais parecido com um projeto real em React, separando o conteúdo em componentes e deixando o código mais fácil de entender e manter.

O site simula uma plataforma de gestão de contratos, com menu, seção principal, benefícios, passo a passo, formulário de demonstração e rodapé.

## Sobre o React no projeto

React foi o tema principal do trabalho. Ele é uma biblioteca JavaScript usada para construir interfaces de usuário de forma componentizada. Em vez de deixar todo o HTML em um arquivo só, o React permite dividir a tela em partes menores, chamadas de **componentes**.

Neste projeto, usamos essa ideia para separar cada pedaço da página:

- `Navbar`: menu fixo do topo;
- `Hero`: primeira parte da página, com chamada principal;
- `LogosBar`: faixa com nomes de empresas;
- `Benefits`: cards com os benefícios da plataforma;
- `HowItWorks`: seção explicando o funcionamento em etapas;
- `CTASection`: formulário para solicitar demonstração;
- `Footer`: rodapé com links e contato.

Com isso, o arquivo `App.jsx` fica mais limpo, porque ele apenas junta todos esses componentes na ordem em que aparecem na página.

Também foram usados alguns recursos importantes do React:

- **JSX**, que permite escrever uma estrutura parecida com HTML dentro do JavaScript;
- **componentes funcionais**, que são funções que retornam partes da interface;
- **props**, usadas para passar informações de um componente para outro, como no caso do `Navbar`;
- **useState**, para guardar estados da tela, como menu aberto, formulário enviado e loading;
- **useEffect**, usado para iniciar animações e controlar o efeito do menu quando a página é rolada;
- **map**, usado para montar listas de cards a partir dos dados do arquivo `data.js`.

## Tecnologias usadas

- React 18.2.0
- React DOM 18.2.0
- Vite
- JavaScript
- HTML
- CSS
- Bootstrap 5
- Bootstrap Icons
- AOS, para animações ao rolar a página
- Google Fonts

## Estrutura de pastas

```text
AT5-FRAMEWORK REACT - ESTRUTURA/
├── index.html
├── package.json
├── README.md
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data.js
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── LogosBar.jsx
│       ├── Benefits.jsx
│       ├── HowItWorks.jsx
│       ├── CTASection.jsx
│       └── Footer.jsx
└── dist/
```

## Explicando os arquivos principais

### `index.html`

É o arquivo base da aplicação. Nele existe a `div` com o id `root`, que é onde o React renderiza todo o projeto. Também estão os links externos do Bootstrap, Bootstrap Icons, Google Fonts e AOS.

### `src/main.jsx`

É o ponto de entrada do React. Ele pega a `div` com id `root` e renderiza o componente principal `App` dentro dela.

### `src/App.jsx`

É o componente principal do projeto. Ele importa os outros componentes e monta a página completa. Também controla o estado `scrolled`, usado para mudar o visual da navbar quando o usuário rola a página.

### `src/components/`

Pasta onde ficam os componentes separados da interface. Cada componente cuida de uma parte da página, o que deixa o projeto mais organizado.

### `src/data.js`

Arquivo usado para guardar dados que aparecem na tela, como os benefícios, etapas e links do rodapé. Isso evita repetir muito código dentro dos componentes.

### `src/index.css`

Arquivo principal de estilos. Nele ficam as cores, espaçamentos, layout, responsividade e estilos personalizados da landing page.

## Como rodar o projeto

Antes de rodar, é necessário ter o **Node.js** instalado no computador.

1. Instalar as dependências:

```bash
npm install
```

2. Rodar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

3. Abrir o endereço mostrado no terminal. Normalmente o Vite abre em:

```text
http://localhost:5173
```

## Outros comandos

Para gerar a versão final do projeto:

```bash
npm run build
```

Para visualizar a versão gerada no build:

```bash
npm run preview
```

## Funcionamento da página

A página é uma landing page de apresentação. Ela não possui banco de dados nem backend, então o formulário de demonstração é apenas uma simulação. Quando o usuário envia o formulário, o React muda o estado da tela para mostrar uma resposta de envio, mas os dados não são mandados para um servidor.

A navegação do menu usa links internos, como `#beneficios`, `#como-funciona` e `#demo`, levando o usuário para as seções da própria página.

## O que foi aprendido

Com esse trabalho deu para entender melhor como o React ajuda a organizar uma interface. Em vez de deixar tudo em um único arquivo HTML grande, a página foi dividida em componentes menores. Isso facilita a manutenção, porque se for preciso mexer no formulário, por exemplo, dá para abrir apenas o componente `CTASection`.

Também ficou mais claro como o React trabalha com estado. O menu mobile, o efeito de rolagem da navbar e o envio do formulário usam `useState`, enquanto o `useEffect` foi usado para executar ações quando a página carrega.

## Observações

O projeto usa algumas bibliotecas por CDN no `index.html`, como Bootstrap e AOS. Isso ajuda a deixar a interface mais bonita e com animações sem precisar criar tudo do zero.

Como é um trabalho focado em estrutura e React, algumas funcionalidades são demonstrativas. Para virar um sistema completo, ainda seria necessário criar backend, autenticação, banco de dados e integração real do formulário.
