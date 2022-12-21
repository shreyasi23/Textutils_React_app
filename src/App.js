//import logo from './logo.svg';
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About us"/>
      {/* <Navbar/> */}
      {/* <Navbar aboutText = "About us"/> */}
      <div className = "container my-3" id = "page_content">
      <TextBox heading = "Easy Text Analysis and Editing"/>
      </div>
    </>
  );
}

export default App;
