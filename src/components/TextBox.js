import React, {useState} from 'react'

export default function TextBox(props){
    const[text, setText] = useState("Enter text here");
    
    // function to handle click event for uppercase button
    const handleUppercase = (event) =>{
        console.log("clicked on uppercase button");
        let updateText = text.toUpperCase();
        setText(updateText);
    }

    // function to handle change in state of text box (when user types in)
    const handleOnChange = (event) =>{
        console.log("I am handling on change event to change the state of the text box");
        setText(event.target.value);
    }

    // function to handle click event for lowercase button
    const handleLowercase = (event) =>{
        console.log("clicked on lowercase button");
        let updateText = text.toLowerCase();
        setText(updateText);
    }
    return(
        <>
            {/*text editing*/}
            <section id = "text_edit">
                <h2 >{props.heading}</h2>
                <p >Easily convert your text to uppercase, lowercase</p>
                <textarea className="form-control input_box" id="exampleFormControlTextarea1" value = {text} onChange = {handleOnChange} rows="8"></textarea>
                <div id = "button_box">
                    <button className = "btn btn-info my_btn_style"  onClick = {handleUppercase}>[A] uppercase</button>
                    <button className = "btn btn-info my_btn_style" onClick = {handleLowercase}>[a] lowercase</button>
                </div>
            </section>

            {/*text analysis*/}
            <section id = "text_analysis">
                <h4 id = "ta_heading">Text Analysis</h4>
                <p>Number of words: {text === ""? 0:text.split(" ").length}</p>
                <p>Number of characters: {text.length}</p>
                <p>Read time: {0.008 * (text === ""? 0:text.split(" ").length)} minutes</p>
            </section>

            {/*text preview*/}
            <section id = "text_preview">
                <h4 id = "tp_heading">Preview</h4>
                {/* <div id = "preview_display">{text}</div> */}
                <textarea className="form-control preview_box" id="exampleFormControlTextarea1" rows = "20" cols= "200" value={text}></textarea>
            </section>
        </> 
    )
}