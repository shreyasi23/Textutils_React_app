//import logo from './logo.svg';
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');

  // function to toggle between light and dark mode
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      console.log(mode);
      document.body.style.backgroundColor = '#1d1d1d';
      // document.body.style.color = "white";
    }
    else{
      setMode('light');
      console.log(mode);
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';

    }
  }
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About us" mode = {mode} toggleMode = {toggleMode}/>
      {/* <Navbar/> */}
      {/* <Navbar aboutText = "About us"/> */}
      <div className = "container my-3" id = "page_content">
      <TextBox heading = "Easy Text Analysis and Editing" mode = {mode}/>
      </div>
    </>
  );
}

export default App;
