import Particles from 'react-tsparticles'
import React from 'react'
import Typed from 'react-typed'
import shekil from '../wall-and-laptop-background.jpg'







// tsparticles dan isdifadə etdiyim üçün download cv altda qalır deyəsən clikcləmək olmur onu düzəldə bilmədim

const Header = () => {


    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className="header-wrapper">

            
            <div className='background'>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: false,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: false,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },

                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {


                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.7,
                                width: 1,
                            },

                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 750,
                                    value: 140,
                                },
                                value: 90,
                            },
                            opacity: {
                                value: 0.7,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}

                />
            </div>


            <div className="main-info">

                <h1 className='text-center'>Web development and website services</h1>

                <Typed
                    className="typed-text"
                    strings={[
                        'Gələcəyin FrontEnd Developeri',
                        'Gələcəyin Graphic Designeri',
                        'ASOİU-nun bədbəxt tələbəsi']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >

                </Typed>

                <a href={shekil} className="downloadcv" download>Download CV</a>
            </div>


        </div>
    )
}

export default Header
