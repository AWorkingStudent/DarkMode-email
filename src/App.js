import React, {useState} from 'react';
import emailjs from "emailjs-com";
import { ThemeProvider, createGlobalStyle } from 'styled-components'

// dark mode code

//dark mode colors
const blue = "#0abab5"
const gray = "#383718"


//light mode colors
const black = "#000000"
const white = "#ffffff"

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${ props => props.theme.mode === 'dark' ? black : white };
  color: ${props => props.theme.mode === 'dark' ? blue : gray };
}`






function Email(e) {
    e.preventDefault();

    emailjs.sendForm('abu', 'first', e.target, 'user_vvwrD3IeAVjQtDUQyWgjg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }











function App() {
  const [theme, setTheme] = useState({ mode : 'light'});
  return (

    <ThemeProvider theme={theme}>

      <>
      <GlobalStyle/>
      <header>
        <h1>Hello world, email</h1>
        <p>Sends hello world to any email in the forum</p>
      </header>


        <div>
        <form onSubmit={Email}>
        <input type="email" placeholder="Your email address" name="email" />
        <input type="submit" value="Send"/>
        </form>
        </div>

        < button onClick={e=>setTheme(theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'} )}> Dark Mode button</button>

      <footer><p> made by Abubakar Daud</p></footer>
      </>
      </ThemeProvider>


  );
}

export default App;
