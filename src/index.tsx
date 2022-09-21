import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import Twemoji from 'react-twemoji'

import IndexPage from './pages/index'
import Footer from './components/footer'
import './_global.css'
import './i18next.config'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <StrictMode>
        <Twemoji>
            <IndexPage />
            <Footer />
        </Twemoji>
    </StrictMode>
)
