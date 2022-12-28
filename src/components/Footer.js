import React from 'react';
export default function Footer(props){
    return(
        <footer>
            <span style = {{color: props.mode==='light'?'black':'white'}}>Made by K Shreyasi</span>
        </footer>
    )
}