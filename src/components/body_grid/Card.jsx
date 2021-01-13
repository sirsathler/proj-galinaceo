import React from 'react'
import './Card.css'

export default props => {

    const src = props.src
    const icon = props.icon
    const title = props.title
    const description = props.description

    return (
        <div class='div_card'>
            <img class='img_cardImg' src={src} />
            <div class='div_cardHeader'>
                <img class='img_icon'src={icon} />
                <span>{title}</span>
            </div>
            <p>
                {description}
            </p>
        </div>
    )

}