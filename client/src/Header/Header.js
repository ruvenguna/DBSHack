import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import M from 'materialize-css'

library.add(faBars)

class Header extends React.Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        
        M.Sidenav.init(elems);
    }


    render() {
        return (   
            <div className="navbar-fixed">
                <nav className="#c62828 red darken-3">
                    <div className="container nav-wrapper">
                        <a href="#" className="brand-logo center">DBS iBanking</a>
                        <a to="#" className="sidenav-trigger" data-target="mobile-menu"><FontAwesomeIcon icon={['fas', 'bars']} className="vertical-align headerChange"  style={{color:`black`, marginTop:15, fontSize:30}}></FontAwesomeIcon></a>
                        <ul id="nav-mobile" className="right hide">
                            <li><a href="#">Sass</a></li>
                            <li><a href="#">Components</a></li>
                            <li><a href="#">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>   
                <ul className="sidenav" id="mobile-menu">
                    <li><a to={"/"} style={{color:`black`, fontFamily:`Crimson Text, serif`, height:`100%`, display:`flex`, justifyContent:`center`, alignItems:`center`}} className="sidenav-close">Home</a></li>
                    <li><a to={"/author"} style={{color:`black`, fontFamily:`Crimson Text, serif`, height:`100%`, display:`flex`, justifyContent:`center`, alignItems:`center`}} className="sidenav-close">Authors</a></li>
                </ul>
            </div>       
        )
    }
}

export default Header;