import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../data/Store/Store';
import "./header.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [headerColor, setHeaderColor] = useState(false);
  const [menuClosed, setMenuClosed] = useState(true);
  const { currPage } = useContext(Context)

  function changeBackGroundColor() {
    if (window.scrollY >= 1) {
      setHeaderColor(true)
    } else {
      setHeaderColor(false)
    }
  }

  window.addEventListener('scroll', changeBackGroundColor)

  let headerClasses = "headerWrapper "
  headerClasses += currPage !== "Home" ? "solidBackground " : " "
  headerClasses += headerColor ? "active " : " "

  return (
    <header className={headerClasses}>
      <div className='header'>
        <div className="logo">
          <Link className={headerColor ? "active" : ""} to="/">
            EWB REAL ESTATE
          </Link>
        </div>
        <nav className={menuClosed ? "navigation hide" : "navigation"}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/properties">Properties</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className='resposiveButton'>
          <div className={menuClosed ? "" : "hide"}>
            <button onClick={e => setMenuClosed(false)}>
              <MenuIcon />
            </button>
          </div>
          <div className={menuClosed ? "hide" : ""}>
            <button onClick={e => setMenuClosed(true)}>
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header