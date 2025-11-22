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
        title: "Hinges",
        link: "/hinges",
        image: "assets/images/project/project-2-1.jpg"
    },
    { 
        title: "Sliding & Folding Systems", 
        link: "/sliding-folding",
        image: "assets/images/project/project-2-2.jpg"
    },
    { 
        title: "Wardrobe Accessories", 
        link: "/wardrobe-accessories",
        image: "assets/images/project/project-2-3.jpg"
    },
    { 
        title: "Drawer Runners", 
        link: "/drawer-runners",
        image: "assets/images/project/project-2-3.jpg"
    },
    { 
        title: "Kitchen Accessories", 
        link: "/kitchen-acc",
        image: "assets/images/project/project-2-3.jpg"
    },
    { 
        title: "Profiles", 
        link: "/profiles",
        image: "assets/images/project/project-2-3.jpg"
    },
    { 
        title: "Home Decor Handles", 
        link: "/home-decor-handles",
        image: "assets/images/project/project-2-3.jpg"
    },
    { 
        title: "Wardrobe Handles", 
        link: "/wardrobe-handles",
        image: "assets/images/project/project-2-3.jpg"
    },
    { 
        title: "Bed Fittings", 
        link: "/bed-fittings",
        image: "assets/images/project/project-2-3.jpg"
    },
    { 
        title: "Sofa Legs", 
        link: "/sofa-legs",
        image: "assets/images/project/project-2-3.jpg"
    },
    { 
        title: "Door Hinges",
        link: "/door-hinges",
        image: "assets/images/project/project-2-1.jpg"
    },
    { 
        title: "Door & Window Fittings", 
        link: "/door-window-fittings",
        image: "assets/images/project/project-2-2.jpg"
    },
    { 
        title: "Mortice Locking Solutions", 
        link: "/mortice-locking-solutions",
        image: "assets/images/project/project-2-3.jpg"
    },
    { 
        title: "Cylinder Locks", 
        link: "/cylinder-locks",
        image: "assets/images/project/project-2-3.jpg"
    },
    { 
        title: "Floor Springs", 
        link: "/floor-springs",
        image: "assets/images/project/project-2-3.jpg"
    },
    { 
        title: "Glass Patch Fittings", 
        link: "/glass-patch-fittings",
        image: "assets/images/project/project-2-3.jpg"
    },
    { 
        title: "Digital Locking Solutions", 
        link: "/digital-locking-solutions",
        image: "assets/images/project/project-2-3.jpg"
    },
    { 
        title: "Pull Handles", 
        link: "/pull-handles",
        image: "assets/images/project/project-2-2.jpg"
    },
    { 
        title: "Rim Locks", 
        link: "/rim-locks",
        image: "assets/images/project/project-2-2.jpg"
    },
    { 
        title: "Pad Locks", 
        link: "/pad-locks",
        image: "assets/images/project/project-2-1.jpg"
    },
    { 
        title: "Furniture Locks", 
        link: "/furniture-locks",
        image: "assets/images/project/project-2-1.jpg"
    },
    { 
        title: "Door Hooks", 
        link: "/door-hooks",
        image: "assets/images/project/project-2-2.jpg"
    },
    { 
        title: "Safe Locks", 
        link: "/safe-locks",
        image: "assets/images/project/project-2-3.jpg"
    }
];



export default function Project4() {
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