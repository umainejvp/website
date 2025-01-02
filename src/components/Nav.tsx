import './Nav.css'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router'

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
                    <img id='mobile-nav-logo' src={logo} alt='UMaine JVP Logo' />
                </div>
            )}
            <Link className='nav-item' to='/#about'>
                who we are
            </Link>
            <Link className='nav-item' to='/#get-involved'>
                get involved
            </Link>
            {!mobile && (
                <Link to='/' style={{ height: 'inherit' }}>
                    <img id='jvp-logo' src={logo} alt='UMaine JVP Logo' />
                </Link>
            )}
            <Link className='nav-item' to='/#contact'>
                contact
            </Link>
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
