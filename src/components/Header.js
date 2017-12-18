import React from 'react';
import ReactSVG from 'react-svg';
import logo from '../img/githubicon.svg'

const Header = ()=> {
    return (
        <div className = "header">
            <h1 className = "header--title">Markdown Previewer</h1>
            <a href = "https://github.com/kevin578/markdown-previewer" target = "_blank" className = "header__a">
            <object type="image/svg+xml" data={logo} className = "header--logo"/>
            <p class = "header__p">by Kevin Briggs</p>
            </a>
        </div>
    )
}

export default Header;