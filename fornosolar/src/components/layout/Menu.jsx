import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    
    <aside className='Menu'>
        <nav>
            <ul>
                <li>
                    <Link to="/inicio">Inicio</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
                
            </ul>
        </nav>

    </aside>
    
)
export default Menu