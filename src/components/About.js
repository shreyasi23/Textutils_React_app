import React from 'react';
export default function About(props){
    return(
        <section>
            <h2 style = {{color: props.mode === 'light'?'black':'white'}}>About TextUtils</h2>
            <div style = {{color: props.mode === 'light'?'black':'white'}}>TextUtils is a free tool to help you with your daily tasks. Convert your entire text to uppercase, lowercase, titlecase, find and replace words, remove extra spaces in text and copy text with just one click. TextUtils also provides text analysis which inclues word and character count and read time.</div>
        </section>
    )
}