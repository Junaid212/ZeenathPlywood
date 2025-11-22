'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

const projects = [
    { 
        title: "Seamless Louver Panels",
        link: "/seamless-louver-panels",
        image: "assets/images/project/project-4-1.jpg"
    },
    { 
        title: "Charcoal Sheets",
        link: "/charcoal-sheets",
        image: "assets/images/project/project-4-2.jpg"
    },
    { 
        title: "Mosaic Panels",
        link: "/mosaic-panels",
        image: "assets/images/project/project-4-3.jpg"
    },
    { 
        title: "Ratan Cane Rolls",
        link: "/ratan-cane-rolls",
        image: "assets/images/project/project-4-4.jpg"
    },
    { 
        title: "Mirror Engraved Panels",
        link: "/mirror-engraved-panels",
        image: "assets/images/project/project-4-5.jpg"
    },
    { 
        title: "Wainscoting",
        link: "/wainscoting",
        image: "assets/images/project/project-4-6.jpg"
    },
    { 
        title: "Gold Bar",
        link: "/gold-bar",
        image: "assets/images/project/project-4-7.jpg"
    },
    { 
        title: "Alabaster",
        link: "/alabaster",
        image: "assets/images/project/project-4-8.jpg"
    },
    { 
        title: "Kork Sheets",
        link: "/kork-sheets",
        image: "assets/images/project/project-4-9.jpg"
    },
    { 
        title: "CharcoFab Fabric Panels",
        link: "/charcofab-fabric-panels",
        image: "assets/images/project/project-4-10.jpg"
    },
    { 
        title: "Fibre Cement Boards",
        link: "/fibre-cement-boards",
        image: "assets/images/project/project-4-11.jpg"
    },
    { 
        title: "Terra Blocks",
        link: "/terra-blocks",
        image: "assets/images/project/project-4-12.jpg"
    },
    { 
        title: "Breeze Blocks",
        link: "/breeze-blocks",
        image: "assets/images/project/project-4-13.jpg"
    },
    { 
        title: "Clayneer",
        link: "/clayneer",
        image: "assets/images/project/project-4-14.jpg"
    },
    { 
        title: "HD-HMR Fluted Panels",
        link: "/hd-hmr-fluted-panels",
        image: "assets/images/project/project-4-15.jpg"
    },
    { 
        title: "MDF Grill Board",
        link: "/mdf-grill-board",
        image: "assets/images/project/project-4-16.jpg"
    },
    { 
        title: "MDF Wave Board",
        link: "/mdf-wave-board",
        image: "assets/images/project/project-4-17.jpg"
    },
    { 
        title: "Artificial Gardening",
        link: "/artificial-gardening",
        image: "assets/images/project/project-4-18.jpg"
    }
];



export default function Project5() {
    return (
        <>
        {/* Project Two Start */}
        <section className="project-two">
            <div className="container">
                <div className="project-two__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            {/* <span className="section-title__tagline">Our Latest portfolio</span> */}
                        </div>
                        <h2 className="section-title__title">Other</h2>
                    </div>
                    <div className="project-two__nav">
                        <div className="swiper-button-prev1 h1p">
                            <i className="icon-arrow-left"></i>
                        </div>
                        <div className="swiper-button-next1 h1n">
                            <i className="icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="project-two__bottom">
                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                        <div className="swiper-wrapper">
                            {projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div className="project-two__single">
                                        <div className="project-two__img">
                                            <img src={project.image} alt={project.title}/>
                                            <div className="project-two__content">
                                                <div className="project-two__title-box">
                                                    <h5 className="project-two__title">
                                                        <Link href={project.link}>{project.title}</Link>
                                                    </h5>
                                                </div>
                                                <div className="project-two__arrow">
                                                    <Link href={project.image} className="img-popup">
                                                        <span className="icon-dabble-arrow-right"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
        {/* Project Two End */}
        </>
    )
}