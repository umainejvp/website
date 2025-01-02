import './Nav.css'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import logo from '../assets/logo.jpg'

function Nav() {
    function scrollToSectionWithId(id: string) {
        setExpanded(false)
        const sectionTop = document.getElementById(id)?.getBoundingClientRect().top
        if (!sectionTop) return
        const navbarEl = document.getElementById('navbar')?.childNodes[0] as Element
        const navbarOffset = navbarEl.getBoundingClientRect().height
        window.scrollTo(0, window.scrollY + sectionTop - navbarOffset)
    }

    function onIsTabletOrMobileChange(value: boolean) {
        setMobile(value)
    }

    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        if (window.matchMedia('(max-width: 100vh)').matches === true) setMobile(true)
        else setMobile(false)
    }, [])

    const [mobile, setMobile] = useState(false)
    useMediaQuery({ query: `(max-width: 100vh)` }, undefined, onIsTabletOrMobileChange)

    return (
        <div id='navbar' className={expanded ? 'expanded' : 'contracted'}>
            {mobile && (
                <div id='mobile-nav-top-row'>
                    <button id='menu' onClick={() => setExpanded(!expanded)}>
                        ≡
                    </button>
                    <img id='mobile-nav-logo' src={logo} alt='UMaine JVP Logo' />
                </div>
            )}
            <a className='nav-item' href='/#about'>
                who we are
            </a>
            <a className='nav-item' href='/#get-involved'>
                get involved
            </a>
            {!mobile && (
                <a href='/' style={{ height: 'inherit' }}>
                    <img id='jvp-logo' src={logo} alt='UMaine JVP Logo' />
                </a>
            )}
            <a className='nav-item' href='/#contact'>
                contact
            </a>
            <a
                id='register'
                className='nav-item'
                href='https://bit.ly/UMSDivest'
                target='_blank'
                rel='noreferrer'
                onClick={() => setExpanded(!expanded)}
            >
                sign the petition
            </a>
        </div>
    )
}

export default Nav
