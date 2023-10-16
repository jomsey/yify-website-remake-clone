import React from 'react';
import "./NavBar.css";
import logo from "/logo-YTS.svg";
import { YifyAppContext } from '../context';
import NavLink from './NavLink';


function NavBar() {
       
  const {setFormsModalVisible,setActiveForm} = React.useContext(YifyAppContext)
    
  return (
    <div className="top-nav">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
            <div className="top-nav-group">
                <form action="" method="get">
                    <input name="q" placeholder='Quick search'/>
                </form>
                <div className="top-nav-links">
                    <ul>
                      <li><NavLink to="/" navLabel="Home"/></li>
                      <li><NavLink to="" navLabel="4k"/></li>
                      <li><NavLink to="/trending" navLabel="Tending"/></li>
                      <li><NavLink to="/browse" navLabel="Browse Movies"/></li>
                    </ul>
                </div>
                <div className="auth-links">
                    <ul>
                        <li onClick={ () =>{
                                       setFormsModalVisible(true);
           setActiveForm('login');
    }}>Login</li>
                        <span className="divider"></span>
                        <li onClick={ () =>{
           setFormsModalVisible(true);
           setActiveForm('register');
    }}>Register</li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default NavBar