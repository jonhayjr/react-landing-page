import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './styles/styles.css'

/*Import page components*/ 
import {Home, About, Projects, Contact, NotFound} from './pages/index';

/*Create global styles*/
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
`

const App = (): JSX.Element  => {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
