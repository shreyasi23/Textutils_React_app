import React, {useState} from 'react'

export default function TextBox(props){
    const[text, setText] = useState("Enter text here");
    
    const handleUppercase = (event) =>{
        console.log("clicked on convert to uppercase button");
        let updateText = text.toUpperCase();
        setText(updateText);
    }

    const handleOnChange = (event) =>{
        console.log("I am handling on change event to change the state of the text box");
        setText(event.target.value);
    }
    return(
        <div className="mb-3">
            <h2>{props.heading}</h2>
            <p>Easily convert your text to uppercase</p>
            <textarea className="form-control" id="exampleFormControlTextarea1" value = {text} onChange = {handleOnChange} rows="8"></textarea>
            <button className = "btn btn-primary" id = "up_btn" onClick = {handleUppercase}>UPPERCASE</button>
        </div>
    )
}