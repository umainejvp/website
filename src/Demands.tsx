import { useEffect, useState } from 'react'
import Nav from './components/Nav.tsx'
import { Document, Page } from 'react-pdf'
import doc from '/Divestment Demand for UMaine System.pdf'
import { pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString()

function Demands() {
    useEffect(() => {
        window.scrollTo(0, 0)
        resize()

        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])

    const [screenWidth, changeScreenWidth] = useState(window.outerWidth)

    function resize() {
        if (window.outerWidth > window.outerHeight) changeScreenWidth(1000)
        else changeScreenWidth(window.outerWidth)
    }

    return (
        <>
            <Nav />
            <div className='page-content'>
                <section className='main-nav-section' style={{ paddingTop: '2rem' }}>
                    <h2>Our Demands to the University of Maine System</h2>
                    {/* <p>description here</p> */}
                </section>
                <div className='pdf-wrapper'>
                    <Document file={doc}>
                        {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                            <Page pageNumber={page} key={page} width={screenWidth} className='pdf-page' />
                        ))}
                    </Document>
                </div>
                <footer></footer>
            </div>
        </>
    )
}

export default Demands
