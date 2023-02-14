import React from 'react'

import  './StyleMenu.scss'

import iconHome from '../../assets/icones/home.png';
import iconMaisCurtidas from '../../assets/icones/mais-curtidas.png';
import iconMaisVistas from '../../assets/icones/mais-vistas.png';
import iconNovas from '../../assets/icones/novas.png';
import iconSurpreenda from '../../assets/icones/surpreenda-me.png';

export default function Menu() {
  return (
    <nav>

        <ul>
            <li>
                <img src={iconHome} alt='' />
                <a href='/'>Inicio</a>
            </li>
            <li>
                <img src={iconMaisCurtidas}  alt='' />
                <a href='/'>Mais Curtidas</a>
            </li>
            <li>
                <img src={iconMaisVistas}  alt='' />
                <a href='/'>Mais Vistas</a>
            </li>
            <li>
                <img src={iconNovas}  alt='' />
                <a href='/'>Novas</a>
            </li>
            <li>
                <img src={iconSurpreenda}  alt='' />
                <a href='/'>Surpreenda-me</a>
            </li>
        </ul>


    </nav>
  )
}
