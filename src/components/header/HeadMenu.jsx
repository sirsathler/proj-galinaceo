import React from 'react'
import './HeadMenu.css'

export default _ => {
    return (
        <div class='div_headMenu'>
            <div class='div_headMenuLogo'>
                <img class='img_headerLogo' src='https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg' />
                <a>Adobe</a>
            </div>
            <nav class='nav_topMenu'>
                <ul class='ul_topMenu'>
                    <li><a href='/'>Criatividade e Design</a></li>
                    <li><a href='/'>Marketing e comercialização</a></li>
                    <li><a href='/'>PDF e assinaturas eletrônicas</a></li>
                    <li><a href='/'>Soluções empresariais</a></li>
                    <li><a href='/'>Suporte</a></li>
                </ul>
            </nav>
            <li>Fazer Logon</li>
        </div>
    )
}