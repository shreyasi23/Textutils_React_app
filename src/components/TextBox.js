import React, {useState} from 'react'

export default function TextBox(props){
    const[text, setText] = useState("Enter text here");
    const[fText, set_fText] = useState("Enter word to find");
    const[rText, set_rText] = useState("Enter word to replace");
    
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

    // function to handle click event for clear
    const handleClear = (event) =>{
        console.log("clicked on clear button");
        let updateText = '';
        setText(updateText);
    }

    // function to handle click event for title case 
    const handleTitlecase = (event) =>{
        console.log("clicked on title case button");
        let updateText = text.toLowerCase().split(' ');
        for(let i = 0; i < updateText.length; i++){
            updateText[i] = updateText[i].charAt(0).toUpperCase() + updateText[i].slice(1);
        }
        setText(updateText.join(' '))
    }

    // function to handle find 
    const handleFind = (event) =>{
        console.log("handling on change event to change the state of the find box");
        set_fText(event.target.value);
    }

    // function to handle replace
    const handleReplace = (event) =>{
        console.log("handling on change event to change the state of the replace box");
        set_rText(event.target.value);
    }

    // function to handle click event of replace button
    const handleClickReplace = () =>{
        let updateText = text.replace(fText, rText);
        setText(updateText);
    }

    return(
        <>
            {/*text editing*/}
            <section id = "text_edit">
                <h2 >{props.heading}</h2>
                <p >Easily convert your text to uppercase, lowercase, titlecase, get count of words and characters and get read time</p>
                <textarea className="form-control input_box" id="exampleFormControlTextarea1" value = {text} onChange = {handleOnChange} rows="8"></textarea>
                <div id = "button_box">
                    <button className = "btn btn-info my_btn_style"  onClick = {handleUppercase}>[A] Uppercase</button>
                    <button className = "btn btn-info my_btn_style" onClick = {handleLowercase}>[a] Lowercase</button>
                    <button className = "btn btn-info my_btn_style resize_btn" onClick = {handleTitlecase}>Titlecase</button>
                    <button className = "btn btn-info my_btn_style resize_btn" id  = "clear_btn" onClick = {handleClear}><i class="fa fa-eraser"></i> Clear</button>
                </div>
                <div id = "find_replace_area">
                    <span>Find</span>
                    <input type = "text" value = {fText} onChange = {handleFind}/>
                    <span>Replace</span>
                    <input type = "text" value = {rText} onChange = {handleReplace}/>
                    <button className = "btn btn-info my_btn_style resize_btn" onClick = {handleClickReplace}>Replace</button>
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
                <textarea className="form-control preview_box" id="exampleFormControlTextarea1" rows = "19" cols= "200" value={text}></textarea>
            </section>
        </> 
    )
}