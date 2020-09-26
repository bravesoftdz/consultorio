import React, { Fragment } from 'react'
import Header from '../components/Header'
import Banners from '../components/Banners'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/ContactForm'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <Fragment>
            <div className="Page__main" id="home">
                <Header />
                <Banners />
                <About />
                <Services />
                <Contact />
                <Footer />
            </div>
        </Fragment>
    );
}

export default Home;