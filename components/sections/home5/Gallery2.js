'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
}

export default function Gallery2() {
    return (
        <>
        <section className="gallery-two">
            <div className="gallery-two__shape-1"
                style={{ backgroundImage: 'url(assets/images/shapes/gallery-two-shape-1.png' }} ></div>
            <div className="container">
                <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Latest gallery</span>
                    </div>
                    <h2 className="section-title__title">Constructing the world<br/> we envision</h2>
                </div>
                
                <div className="gallery-two__bottom">
                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                        <div className="swiper-wrapper">
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="gallery-two__single-wrap">
                                    <h2 style={{color:'white'}}>Wood Veneer</h2>
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/303.png" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Natural </Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/303.png" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Recon </Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <h2 style={{color:'white'}}>Stone Veneer</h2>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-4.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Stone Veneer</Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
        </>
    )
}