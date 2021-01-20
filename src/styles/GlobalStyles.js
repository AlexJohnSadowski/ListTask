import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    padding: 0;
    overflow-x:hidden;
    background: white;
    font-family: 'Monospaced Number', 'Chinese Quote', Helvetica, Arial, sans-serif;
    font-size: 2vh;
   
  }
  
  li{
      padding:5px 0;
      margin-left:20px;
  }
  #root {
    padding: 30px;
  }
`

export { GlobalStyles }
