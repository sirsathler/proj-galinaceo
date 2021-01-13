import React from 'react'
import Card from './Card.jsx'
import './BodyGrid.css'

export default _ => {
    return (

        <div class='div_parent'>
            <div class='div_bodyGrid'>
                <Card src='https://i.imgur.com/DG7JlWp.png' icon='https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/photoshop.svg' title='Photoshop' description='Edição, composição e criação de belas imagens, ilustrações e artes no desktop e no iPad. Saiba mais' />
                <Card src='https://i.imgur.com/LUgCgGJ.png' icon='https://www.adobe.com/content/dam/cc/icons/illustrator.svg' title='Illustrator' description='Criação de ilustrações e artes vetoriais atrativas no desktop e no iPad. Saiba mais' />
                <Card src='https://i.imgur.com/tXNjZrk.png' icon='https://www.adobe.com/content/dam/cc/icons/indesign.svg' title='InDesign' description='Criação e publicação de layouts elegantes para impressão e publicação digital. Saiba mais' />
                <Card src='https://i.imgur.com/NwfKVIC.png' icon='https://www.adobe.com/content/dam/cc/icons/premiere.svg' title='Premiere Pro' description='O padrão do setor em edição profissional de filmes e vídeos.
Saiba mais' />
                <Card src='https://i.imgur.com/sQdfsMD.png' icon='https://www.adobe.com/content/dam/cc/icons/xd.svg' title='XD' description='Design e compartilhamento de experiências de usuário para Web, dispositivos móveis, voz e muito mais. Saiba mais' />
                <Card src='https://i.imgur.com/e4vnGEm.png' icon='https://www.adobe.com/content/dam/cc/icons/acrobat-pro.svg' title='Acrobat DC' description='A solução de PDF completa para o mundo móvel e conectado. Saiba mais' />
            </div>
        </div>
    )
}