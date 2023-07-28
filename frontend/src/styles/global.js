import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #0b0b0b;
    --color-primary: #FF577F;
    --color-primary-50: #FF427F;
    --color-primary-disable: #59323F;
    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;
    --color-text: #FFF;
    --color-red: #B4423E; 
    --color-success: #7CC39C;
    --color-warning: #FBEA85;
    --color-negative: #EA524F;

    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  ul, li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;