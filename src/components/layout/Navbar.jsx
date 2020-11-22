import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <ul className="pages">
                    <li>
                        <NavLink activeClassName='selected' className='text-link' exact to='/'>Конвертер</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='selected' className='text-link' exact to='/portfolio'>Портфель</NavLink>
                    </li>
                </ul>
                <a className="logo">crypto.</a>
            </div>
        </nav>
    );
}

export default Navbar;
