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

    // mystyle object in useState hook
    // const [mystyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // useState hook to change button text
    //const[btnText, setBtnText] = useState("Enable Dark Mode")
    
    // function to handle click event for dark mode button
    // const toggleStyle = (event) =>{
    //     if(mystyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    // function to handle click event for remove extra space button
    const handleExtraSpace = () =>{
        let updateText = text.split(/[ ]+/);
        setText(updateText.join(" "));
    }

    // function to handle click event for copy text
    const handleCopy = ()=>{
        let input = document.getElementById("exampleFormControlTextarea1");
        input.select();
        navigator.clipboard.writeText(input.value);
        props.displayAlert("Copied to clipboard","success");
    }

    return(
        <>
            {/*text editing*/}
            <section id = "text_edit" style = {{color: props.mode==='light'?'black':'white'}}>
                <h2 >{props.heading}</h2>
                <p >Easily convert your text to uppercase, lowercase, titlecase, remove extra spaces, find and replace words, get count of words and characters and get read time.</p>
                <textarea className="form-control input_box" id="exampleFormControlTextarea1" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode==='light'?'white':'rgb(35 35 35)', color: props.mode==='light'?'black':'white'}} rows="8"></textarea>
                <div id = "button_box">
                    <button className = {`btn my_btn_style text-${props.mode ==='light'?'dark':'light'}`} onClick = {handleUppercase}>[A] Uppercase</button>
                    <button className = {`btn my_btn_style text-${props.mode ==='light'?'dark':'light'}`} onClick = {handleLowercase}>[a] Lowercase</button>
                    <button className = {`btn my_btn_style resize_btn text-${props.mode ==='light'?'dark':'light'}`} onClick = {handleTitlecase}>Titlecase</button>
                    <button className = {`btn my_btn_style resize_btn text-${props.mode ==='light'?'dark':'light'}`} onClick = {handleCopy}><i className="fa fa-clipboard"></i> Copy</button>
                    <button className = {`btn my_btn_style resize_btn text-${props.mode ==='light'?'dark':'light'}`} id  = "clear_btn" onClick = {handleClear}><i className="fa fa-eraser"></i> Clear</button>
                    <button className = {`btn my_btn_style text-${props.mode ==='light'?'dark':'light'}`} id = "extra_space_btn" onClick = {handleExtraSpace}>Remove extra space</button>
                    {/* <button className = "btn btn-info my_btn_style resize_btn" onClick = {toggleStyle}>{btnText}</button> */}
                </div>
                <div id = "find_replace_area">
                    <span>Find</span>
                    <input type = "text" value = {fText} style = {{backgroundColor: props.mode==='light'?'white':'rgb(35 35 35)', color: props.mode==='light'?'black':'white'}} onChange = {handleFind}/>
                    <span>Replace</span>
                    <input type = "text" value = {rText} style = {{backgroundColor: props.mode==='light'?'white':'rgb(35 35 35)', color: props.mode==='light'?'black':'white'}} onChange = {handleReplace}/>
                    <button className = {`btn my_btn_style resize_btn text-${props.mode ==='light'?'dark':'light'}`} onClick = {handleClickReplace}>Replace</button>
                </div>
            </section>

            {/*text analysis*/}
            <section id = "text_analysis" style = {{color: props.mode==='light'?'black':'white'}}>
                <h4 id = "ta_heading">Text Analysis</h4>
                <p>Number of words: {text === ""? 0:text.split(" ").length}</p>
                <p>Number of characters: {text.length}</p>
                <p>Read time: {0.008 * (text === ""? 0:text.split(" ").length)} minutes</p>
            </section>

            {/*text preview*/}
            {/* <section id = "text_preview" style = {mystyle}> */}
            <section id = "text_preview" style = {{color: props.mode==='light'?'black':'white'}}>
                <h4 id = "tp_heading">Preview</h4>
                <textarea className="form-control preview_box" id="exampleFormControlTextarea1" style = {{backgroundColor: props.mode==='light'?'white':'rgb(35 35 35)', color: props.mode==='light'?'black':'white'}} rows = "19" cols= "200" value={text} onChange = {handleOnChange}></textarea>
                {/* <div id = "preview_display">{text}</div> */}
                {/* <textarea className="form-control preview_box" id="exampleFormControlTextarea1" rows = "19" cols= "200" value={text} style = {mystyle}></textarea> */}
            </section>
        </> 
    )
}