import React from 'react'
import './Card.css'

export default props => {

    const src = props.src
    const icon = props.icon
    const title = props.title
    const description = props.description

    const cardImageStyle = {
        backgroundImage: "url(" + src + ")"
    }

    return (
        <div class='div_card'>

            <div class='div_header'>
                <div class='div_headerImg' style={cardImageStyle} />
            </div>

            <div class='div_body'>
                <div class='div_title'>
                    <img class='img_cardIcon' src={icon} />
                    <span>{title}</span>
                </div>
                <p>
                    {description}
                </p>
            </div>

            <hr />
            <div class='div_footer'>
                
                <li>Experimente gratuitamente</li>
            </div>

        </div>
    )

}