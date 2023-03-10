import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props){
    return(
        <nav className= {`navbar navbar-expand-lg navbar-${props.mode}`}>
        {/* <nav className= {`navbar navbar-expand-lg navbar-${props.mode}`} style = {{backgroundColor: props.theme === 'light'?'rgba(59,130,246,.5)':'#FD7F20'}}></nav> */}
            <div className="container-fluid">
                <Link className= "navbar-brand" to="/#">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                </div>
                {/* Switch for summer mode */}
                {/* <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`} id = "dkm_btn">
                    <input className="form-check-input" onClick = {props.summerTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switchText}</label>
                </div> */}
                {/* Switch for dark mode */}
                <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`} id = "dkm_btn">
                    <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "Set title here",
    aboutText : "About text here"
}
