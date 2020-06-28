import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body.light {
    --background-primary: #ffffff;
    --background-secondary: #f9f9f9;
    --background-tertiary: #c0c0c0;

    --text-primary-color: #252525;
    --text-secondary-color: #000000;

    --text-footer-primary-color: #ffffff;

    --primary-color: #0073ff;
    --secondary-color: #00c8ff;
    --tertiary-color: #f9f9f9;

    --input-placeholder-color: #a6a6a6;
    --input-border-color: #a6a6a6;
  }

  body.dark {
    --background-primary: #101010;
    --background-secondary: #3b3b3b;
    --background-tertiary: #a2a2a2;

    --text-primary-color: #dddddd;
    --text-secondary-color: #ffffff;

    --text-footer-primary-color: #dddddd;

    --primary-color: #565554;
    --secondary-color: #7c7a77;
    --tertiary-color: #f9f9f9;

    --input-placeholder-color: #a6a6a6;
    --input-border-color: #a6a6a6;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    color: var(--text-primary-color);
  }

  h1 {
    font-size: 2rem;
    font-weight: 900;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 900;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 900;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 900;
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 900;
  }

  h6 {
    font-size: 1rem;
    font-weight: 900;
  }
  
  html {
    font-family: Nunito, sans-serif;
  }

  body {
    background: var(--background-primary);
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 15px;
    background: #c6c6c6;
  }

  ::-webkit-scrollbar-track {
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background: #808080;
    border-radius: 15px;

    :hover {
      background: #404040
    }
  }
`
