import React from 'react'
import './StickyMenu.css'

export default _ => {

    return (
        <nav class='nav_stickyMenu'>
            <ul>
                <li><a class='li_stickyMenuItem' href='/'>Adobe Creative Cloud</a></li>
                <li><a class='li_stickyMenuItem' href='/'>Novidades</a></li>
                <li><a class='li_stickyMenuItem' href='/'>Explorar</a></li>
                <li><a class='li_stickyMenuItem' href='/'>Para empresas</a></li>
                <li><a class='li_stickyMenuItem' href='/'>Compare os planos</a></li>
                <li><a class='li_stickyMenuItem' href='/'>Aprendizado e suporte</a></li>
                <li><a class='buyNow' href='/'>Compre agora</a></li>
            </ul>
        </nav>
    )
}