import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return (
        <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
            <Link className="navbar-brand" to="/">Zappy News</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/business">Business</Link>
                <Link className="nav-item nav-link" to="/entertainment">Entertainment</Link>
                <Link className="nav-item nav-link" to="/general">General</Link>
                <Link className="nav-item nav-link" to="/health">Health</Link>
                <Link className="nav-item nav-link" to="/science">Science</Link>
                <Link className="nav-item nav-link" to="/sports">Sports</Link>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Navbar;