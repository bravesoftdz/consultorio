import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link as LinkRouter, useHistory, withRouter } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'

const Header = ({ location }) => {

    let path = location.pathname

    const isAuth = useSelector((state) => state.auth.isAuthenticated)
    const history = useHistory();

    const subir = () => {
        scroll.scrollToBottom(1000)
    }

    useEffect(() => {
        let header = document.querySelector(".header-scroll");
        var nav = document.querySelector(".Mobile")
        var hamburger = document.querySelector(".hamburger")
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('is-active')
            nav.classList.toggle('active')
        })

        const target = document.querySelector(".target");
        const links = document.querySelectorAll(".Nav__Item a");
        const colors = ["#015D74", "#015D74", "#015D74", "#015D74"];

        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", (e) => e.preventDefault());
            links[i].addEventListener("mouseenter", mouseenterFunc);
        }

        function mouseenterFunc() {
            for (let i = 0; i < links.length; i++) {
                if (links[i].parentNode.classList.contains("active")) {
                    links[i].parentNode.classList.remove("active");
                }
                links[i].style.opacity = "0.8";
            }

            this.parentNode.classList.add("active");
            this.style.opacity = "1";

            const width = this.getBoundingClientRect().width;
            const height = this.getBoundingClientRect().height;
            const left = this.getBoundingClientRect().left + window.pageXOffset;
            const top = this.getBoundingClientRect().top + window.pageYOffset;
            const color = colors[Math.floor(Math.random() * colors.length)];

            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
            target.style.borderColor = color;
            target.style.transform = "none";
        }

        window.addEventListener("resize", resizeFunc);

        function resizeFunc() {
            const active = document.querySelector(".mynav li.active");

            if (active) {
                const left = active.getBoundingClientRect().left + window.pageXOffset;
                const top = active.getBoundingClientRect().top + window.pageYOffset;

                target.style.left = `${left}px`;
                target.style.top = `${top}px`;
            }
        }

        function mostrarHeaderScroll() {
            let scroll = document.documentElement.scrollTop
            if (header) {
                if (scroll >= 125) {
                    header.classList.add('scroll');
                } else {
                    header.classList.remove('scroll');
                }
            }
        }
        window.addEventListener('scroll', mostrarHeaderScroll);
    }, [])

    const goHome = () => {
        history.push('/')
    }

    const goDashboard = () => {
        history.push('/dashboard')
    }

    return (
        <Fragment>
            {
                path === "/" ?
                    <div className="Header header-scroll">
                        <div className="Container__Full">
                            <LinkRouter to="/" style={{ textDecoration: "none" }}>
                                <div className="Logo">
                                    <img src={require('../images/logo.png')} alt="imagen del logo" />
                                    <div className="logo-text">
                                        <div>consultorio</div>
                                        <div className="bold">empresarial</div>
                                    </div>
                                </div>
                            </LinkRouter>
                            <button className="hamburger hamburger--collapse" type="button">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                            <span className="target"></span>
                            {
                                isAuth ?
                                    <div className="Nav Mobile" style={{ justifyContent: "flex-end" }}>
                                        <ul className="Nav__Link" style={{ marginTop: "0px" }}>
                                            <li className="Nav__Item">
                                                <Link smooth={true} duration={1000} to="home">home</Link>
                                            </li>
                                            <li className="Nav__Item">
                                                <Link smooth={true} duration={1000} to="about">quiénes somos</Link>
                                            </li>
                                            <li className="Nav__Item">
                                                <Link smooth={true} duration={1000} to="services">servicios</Link>
                                            </li>
                                            <li className="Nav__Item">
                                                <Link smooth={true} duration={1000} to="benefeces">beneficios para tu empresa</Link>
                                            </li>
                                            <li className="Nav__Item">
                                                <Link smooth={true} duration={1000} to="contact">contacto</Link>
                                            </li>
                                            <li className="Nav__Item">
                                                <LinkRouter onClick={goDashboard} to="/dashboard">admin</LinkRouter>
                                            </li>
                                        </ul>
                                    </div>
                                    :
                                    <div className="Nav Mobile" style={{ justifyContent: "flex-end" }}>
                                        <ul className="Nav__Link" style={{ marginTop: "0px" }}>
                                            <li className="Nav__Item">
                                                <Link smooth={true} duration={1000} to="home">home</Link>
                                            </li>
                                            <li className="Nav__Item">
                                                <Link smooth={true} duration={1000} offset={-40} to="about">quiénes somos</Link>
                                            </li>
                                            <li className="Nav__Item">
                                                <Link smooth={true} duration={1000} offset={-80} to="services">servicios</Link>
                                            </li>
                                            <li className="Nav__Item">
                                                <Link smooth={true} duration={1000} offset={-45} to="benefeces">beneficios para tu empresa</Link>
                                            </li>
                                            <li className="Nav__Item">
                                                <Link smooth={true} duration={1000} offset={-80} to="contact">contacto</Link>
                                            </li>
                                        </ul>
                                    </div>
                            }
                        </div>
                    </div> :
                    <div className="Header header-scroll">
                        <div className="Container__Full">
                            <LinkRouter to="/" style={{ textDecoration: "none" }}>
                                <div className="Logo">
                                    <img src={require('../images/logo.png')} alt="imagen del logo" />
                                    <div className="logo-text">
                                        <div>consultorio</div>
                                        <div className="bold">empresarial</div>
                                    </div>
                                </div>
                            </LinkRouter>
                            <button class="hamburger hamburger--collapse" type="button">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                            <span class="target"></span>
                            {
                                isAuth ?
                                    <div className="Nav Mobile" style={{ justifyContent: "flex-end" }}>
                                        <ul className="Nav__Link" style={{ marginTop: "0px" }}>
                                            <li className="Nav__Item">
                                                <LinkRouter to="/">Ir al inicio</LinkRouter>
                                            </li>
                                            <li className="Nav__Item">
                                                <LinkRouter to="/dashboard">admin</LinkRouter>
                                            </li>
                                        </ul>
                                    </div>
                                    :
                                    <div className="Nav Mobile" style={{ justifyContent: "flex-end" }}>
                                        <ul className="Nav__Link" style={{ marginTop: "0px" }}>
                                            <li className="Nav__Item">
                                                <LinkRouter onClick={goHome} to="/">Ir al inicio</LinkRouter>
                                            </li>
                                        </ul>
                                    </div>
                            }
                        </div>
                    </div>
            }
        </Fragment>
    );
}

export default withRouter(Header);