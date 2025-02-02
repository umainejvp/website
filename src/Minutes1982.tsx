import { useEffect, useState } from 'react'
import Nav from './components/Nav.tsx'
import { Document, Page } from 'react-pdf'
import doc from '/Minutes July 1982 BOT Meeting.pdf'
import { pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString()

function Minutes1982() {
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
                    <h2>Minutes from the Meeting of the University of Maine Board of Trustees, July 26, 1982</h2>
                    <p>
                        In 1982, the University of Maine was the fourth university in the United States to divest from
                        apartheid South Africa and complicit corporations. This action, taken by the board in response to
                        pressure from students and faculty, helped inspire other schools to divest and was part of a movement
                        that led to the dissolution of the apartheid regime in South Africa and the liberation of its people.
                        At the time, the board held that “Apartheid conflicts with the values of the university”.
                    </p>
                    <p>
                        Today, the state of Israel has been identified as responsible for a system of apartheid in the West
                        Bank of Occupied Palestine by the{' '}
                        <a
                            href='https://www.un.org/unispal/wp-content/uploads/2022/10/A.77.356_210922.pdf'
                            target='_blank'
                            rel='noreferrer'
                        >
                            United Nations Special Rapporteur on the occupied Palestinian territories
                        </a>
                        , and the{' '}
                        <a
                            href='https://www.hrw.org/news/2024/07/19/world-court-finds-israel-responsible-apartheid'
                            target='_blank'
                            rel='noreferrer'
                        >
                            International Court of Justice
                        </a>
                        . In addition, the conditions Israel is inflicting on the Palestinians in Gaza amounts to genocide. It is
                        therefore the responsibility of our board of trustees to uphold its values and divest from the state
                        of Israel and all corporations complicit in its apartheid regime and genocidal war.
                    </p>
                    <p>The text of the 1982 decision can be found below.</p>
                </section>
                <div className='pdf-wrapper'>
                    <Document file={doc}>
                        {[1, 2, 3, 4, 5].map((page) => (
                            <Page pageNumber={page} key={page} width={screenWidth} className='pdf-page' />
                        ))}
                    </Document>
                </div>
                <footer></footer>
            </div>
        </>
    )
}

export default Minutes1982
