import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Demands from './Demands.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter basename='/website'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/demands' element={<Demands />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
