import React from 'react';
import './Menu.css';

const Menu = props =>{

    return (
        <div className='Menu'>
            <nav>
                <ul>
                    <li>
                        <a href='/'>Sobre</a>
                    </li>
                    <li>
                        <a href='/'>Inicio</a>
                    </li>
                </ul>
            </nav>
        </div>)

}

export default Menu