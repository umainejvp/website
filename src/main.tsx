import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.tsx'
import { HashRouter, Route, Routes } from 'react-router'
import Demands from './Demands.tsx'
import Minutes1982 from './Minutes1982.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/demands' element={<Demands />} />
                <Route path='/minutes-1982' element={<Minutes1982 />} />
            </Routes>
        </HashRouter>
    </StrictMode>
)
