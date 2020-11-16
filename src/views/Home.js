import React, { Fragment, useEffect } from 'react'
import Header from '../components/Header'
import Banners from '../components/Banners'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/ContactForm'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getBanners } from '../redux/actions/banner'
import { getClients } from '../redux/actions/client'

const Home = () => {

    const banners = useSelector((state) => state.banners.banners)
    const clients = useSelector((state) => state.clients.clients)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBanners());
        dispatch(getClients());
    }, [])

    return (
        <Fragment>
            <div className="Page__main" id="home">
                <Header />
                <Banners banners={banners} />
                <About />
                <Services clients={clients} />
                <Contact />
                <Footer />
            </div>
        </Fragment>
    );
}

export default Home;