//import logo from './logo.svg';
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Footer from './components/Footer';
import Alert from './components/Alert';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState("Dark mode");
  const [alert, setAlert] = useState(null);
  // only for practice, exercise 2
  // const [theme, setTheme] = useState('light');
  // const [switchText, setSwitchText] = useState("Summer mode");


  // function to toggle between light and dark mode
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      console.log(mode);
      document.body.style.backgroundColor = '#1d1d1d';
      // document.body.style.color = "white";
      setBtnText("Light mode");
    }
    else{
      setMode('light');
      console.log(mode);
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
      setBtnText("Dark mode");
    }
  }

  // function to show alert message and specify the alert type for bootstrap
  // using setTimeout for auto dismissing of the alert message
  const displayAlert = (message, type) =>{
    setAlert({
      Msg: message,
      Type: type
    });

    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

  // function for summer theme
  // const summerTheme = () =>{
  //   if(theme === 'light'){
  //     setTheme('summer');
  //     console.log(theme);
  //     document.body.style.backgroundColor = '#ffeed5';
  //     setSwitchText("Light mode");
  //   }
  //   else{
  //     setTheme('light');
  //     console.log(theme);
  //     document.body.style.backgroundColor = 'white';
  //     setSwitchText("Summer mode");
  //   }
  // }

  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About us" btnText = {btnText} mode = {mode} toggleMode = {toggleMode}/>
      {/* <Navbar title = "TextUtils" aboutText = "About us" btnText = {btnText} mode = {mode} toggleMode = {toggleMode} summerTheme = {summerTheme} switchText = {switchText} theme = {theme}/> */}
      {/* <Navbar/> */}
      {/* <Navbar aboutText = "About us"/> */}
      <Alert alert = {alert}/>
      <div className = "container my-3" id = "page_content">
      <TextBox heading = "Easy Text Analysis and Editing" mode = {mode} displayAlert = {displayAlert}/>
      {/* <TextBox heading = "Easy Text Analysis and Editing" mode = {mode} displayAlert = {displayAlert} theme = {theme}/> */}
      </div>
      <Footer mode = {mode}/>
    </>
  );
}

export default App;
