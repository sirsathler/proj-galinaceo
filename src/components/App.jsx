import React from 'react'
import './App.css'
import HeadMenu from './header/HeadMenu.jsx'
import StickyMenu from './header/StickyMenu.jsx'
import BodySection from './body/BodySection.jsx'
import BodyNavbar from './body/BodyNavbar.jsx'


var page = 1;

function App() {
    return (    
        <div class='div_app'>
            <header>
                <HeadMenu/>
                <StickyMenu/>
            </header>
            <body>
                <BodySection/>
                <BodyNavbar/>
            </body>

        </div>
    )
}

export default App;