import React from 'react';
export default function Alert(props){

    // function to capitalize the first letter of the alert Type value
    const capitalFirstLetter = (word)=>{
        let newWord = word.toLowerCase();
        return newWord.charAt(0).toUpperCase()+newWord.slice(1);
    }
    return(
        <div id = "alert_box">
        {/* this syntax is will make the alert show only when the value of the alert object is not null  */}
        {props.alert && <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
            <strong>{capitalFirstLetter(props.alert.Type)}!</strong> {props.alert.Msg}.
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}
        </div>
    )
}