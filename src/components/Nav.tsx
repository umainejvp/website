import './Nav.css'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import logo from '../assets/logo.jpg'
import { HashLink } from 'react-router-hash-link'

function Nav() {
    // function scrollToSectionWithId(id: string) {
    //     setExpanded(false)
    //     const sectionTop = document.getElementById(id)?.getBoundingClientRect().top
    //     if (!sectionTop) return
    //     const navbarEl = document.getElementById('navbar')?.childNodes[0] as Element
    //     const navbarOffset = navbarEl.getBoundingClientRect().height
    //     window.scrollTo(0, window.scrollY + sectionTop - navbarOffset)
    // }

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
                    <HashLink id='nav-img-link' to='/'>
                        <img id='mobile-nav-logo' src={logo} alt='UMaine JVP Logo' />
                    </HashLink>
                </div>
            )}
            <HashLink className='nav-item' to='/#events' onClick={() => setExpanded(false)}>
                events
            </HashLink>
            <HashLink className='nav-item' to='/#about' onClick={() => setExpanded(false)}>
                about
            </HashLink>
            <HashLink className='nav-item' to='/#get-involved' onClick={() => setExpanded(false)}>
                get involved
            </HashLink>
            <HashLink className='nav-item' to='/#contact' onClick={() => setExpanded(false)}>
                contact
            </HashLink>
            {!mobile && (
                <HashLink to='/' style={{ height: 'inherit' }}>
                    <img id='jvp-logo' src={logo} alt='UMaine JVP Logo' />
                </HashLink>
            )}
            <HashLink className='nav-item' to='/demands' onClick={() => setExpanded(false)}>
                demands
            </HashLink>
            <HashLink className='nav-item' to='/minutes-1982' onClick={() => setExpanded(false)}>
                precedent
            </HashLink>
            <a
                className='nav-item'
                href='https://drive.google.com/drive/folders/1SWLi8IUPuZs8z0OCBCMCIkrilyiRcONI'
                target='_blank'
                rel='noreferrer'
                onClick={() => setExpanded(!expanded)}
            >
                materials
            </a>
            <a
                id='register'
                className='nav-item'
                href='https://bit.ly/UMSDivest'
                target='_blank'
                rel='noreferrer'
                onClick={() => setExpanded(!expanded)}
            >
                petition
            </a>
        </div>
    )
}

export default Nav
