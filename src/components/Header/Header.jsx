import React, { Component } from 'react'
import "./Header.css"

class Header extends Component {
    
    render() { 
        return (
          <div className='flex justify-between items-center h-24 max-h-24 '>
            <span className='header-title mx-32'>Portfólio</span>
            <nav>
                <ul className='inline-flex justify-between mx-36 navbar'>
                    <li className='px-10 nav-text'><a href='#'>Home</a></li>
                    <li className='px-10 nav-text'><a href='#'>About-me</a></li>
                    <li className='px-10 nav-text'><a href='#'>Contact</a></li>
                </ul>
            </nav>
          </div>
        );
    }
}
 
export default Header;