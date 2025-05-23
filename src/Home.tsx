import './Home.css'
import EventImage from './components/EventImage.tsx'
import march from '/events/UMPD March.png'
import Nav from './components/Nav.tsx'
import jvpLogoSrc from '/JVP-logo.svg'
import instagramLogo from '/ig_icon.webp'
import mailingListLogo from '/mailing_list_icon.png'

function Home() {
    return (
        <>
            <Nav />
            <div className='page-content'>
                <div id='splash-image' title='Free Palestine protestors gather outside Fogler Library'>
                    <div className='splash-square'>
                        <h1 className='title'>UMaine Jewish Voice for Peace</h1>
                        <a className='button' href='https://bit.ly/UMSDivest' target='_blank' rel='noreferrer'>
                            SIGN FOR THE UMAINE SYSTEM TO DIVEST!
                        </a>
                        <a
                            className='button'
                            href='https://docs.google.com/forms/d/e/1FAIpQLSftZI_yXCV5ZaaNDYtZNQSOpmtybHPDDMCWdK_9pi3zIJ7Ukg/viewform'
                            target='_blank'
                            rel='noreferrer'
                        >
                            JOIN OUR MAILING LIST!
                        </a>
                    </div>
                </div>
                <section className='main-nav-section' id='events'>
                    <h2>EVENTS</h2>
                    {/* Stay tuned for more event news soon! */}
                    <div id='events-grid'>
                        <EventImage
                            src={march}
                            name='March on UMPD'
                            time='Friday May 2nd, 1:00pm'
                            place='MLK Plaza'
                            desc='UMaine JVP and Students for a Democratic Society (SDS) will gather at MLK plaza outside of the memorial union to march to the police station and demand answers. Together, we will make it clear that students have the right to know how our public services serve the public!'
                        />
                    </div>
                </section>
                <hr />
                <section className='main-nav-section' id='about'>
                    <div id='about-image-header'>
                        <img src={jvpLogoSrc} alt='Jewish Voice for Peace logo' />
                        <div id='about-image-header-title'>
                            <h1>UMaine Jewish Voice for Peace</h1>
                            <h2>
                                a grassroots, multiracial, intergenerational movement in solidarity with Palestinian
                                liberation
                            </h2>
                        </div>
                    </div>
                    <h2>ABOUT UMAINE JVP</h2>
                    <p>
                        We are an official chapter of{' '}
                        <a href='https://www.jewishvoiceforpeace.org/' target='_blank' rel='noreferrer'>
                            Jewish Voice for Peace
                        </a>{' '}
                        here at the University of Maine. JVP is a national organization focusing on dismantling Zionism and
                        achieving Palestinian liberation.
                    </p>
                    <p>
                        Like generations of Jewish leftists before us, we fight for the liberation of all people. We believe
                        that through organizing, we can and will dismantle the institutions and structures that sustain
                        injustice and grow something new, joyful, beautiful, and life-sustaining in their place.
                    </p>
                    <p>
                        We are welcome to people of all ethnic and/or religious backgrounds who want to fight for peace and
                        justice. We invite any UMaine System community members be you students, faculty, staff, alumni, or
                        taxpaying mainers to sign up for our email list and sign the petition calling on the university of
                        Maine to divest from the state of Israel and corporations complicit in the genocide in Gaza.
                    </p>
                </section>
                <hr />
                <section className='main-nav-section' id='get-involved'>
                    <h2>JOIN US IN OUR WEEKLY MEETINGS!</h2>
                    <p>We meet every Thursday from 5-6pm in the Lown room of the Memorial Union!</p>
                    <div className='buttons-container'>
                        <div className='social-section'>
                            <img className='social-logo' src={mailingListLogo} alt='Email Logo' />
                            <a
                                className='button'
                                href='https://docs.google.com/forms/d/e/1FAIpQLSftZI_yXCV5ZaaNDYtZNQSOpmtybHPDDMCWdK_9pi3zIJ7Ukg/viewform'
                                target='_blank'
                                rel='noreferrer'
                            >
                                JOIN OUR MAILING LIST!
                            </a>
                        </div>
                        <div className='social-section'>
                            <img className='social-logo' src={instagramLogo} alt='Instagram Logo' />
                            <a
                                className='button'
                                href='https://www.instagram.com/umainejvp/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                FOLLOW US ON INSTAGRAM!
                            </a>
                        </div>
                    </div>
                    <h2>WHY SHOULD YOU JOIN UMAINE JVP?</h2>
                    <ul>
                        <li>if you've been looking for a political home for Jews on the left in this perilous moment</li>
                        <li>if you've been wanting a Jewish community with justice at the center</li>
                        <li>
                            if you're <em>not</em> Jewish, but are still looking for such a community
                        </li>
                        <li>if you've been looking to turn your rage and grief into meaningful, strategic action...</li>
                    </ul>
                    <p>
                        <strong>Join us. You belong here.</strong>
                    </p>
                </section>
                <hr />
                <section className='main-nav-section' id='contact'>
                    <h2>CONTACT US</h2>
                    <p>
                        Send us an email at{' '}
                        <a href='mailto:umaine@jvp.org' target='_blank' rel='noreferrer'>
                            umaine@jvp.org
                        </a>
                    </p>
                    <p className='social-section'>
                        <img className='social-logo' src={instagramLogo} alt='Instagram Logo' />
                        <a href='https://www.instagram.com/umainejvp/' target='_blank' rel='noreferrer'>
                            or contact us on Instagram!
                        </a>
                    </p>

                    <p>We hope to hear from you soon :)</p>
                </section>
                <footer></footer>
            </div>
        </>
    )
}

export default Home
