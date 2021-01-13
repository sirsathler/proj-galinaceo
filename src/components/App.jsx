import React from 'react'
import './App.css'
import HeadMenu from './header/HeadMenu.jsx'
import StickyMenu from './header/StickyMenu.jsx'
import BodyIntro from './body/BodyIntro.jsx'
import BodyNavbar from './body/BodyNavbar.jsx'
import BodyInfo from './body/BodyInfo.jsx'
import BodyGrid from './body_grid/BodyGrid.jsx'

var page = 1;

function App() {
    return (    
        <div class='div_app'>
            <header>
                <HeadMenu/>
                <StickyMenu/>
            </header>
            <body>
                <BodyIntro/>
                <BodyNavbar/>
                <BodyInfo/>
                <BodyGrid/>
            </body>

        </div>
    )
}

export default App;