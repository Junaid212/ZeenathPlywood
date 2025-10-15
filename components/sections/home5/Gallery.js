
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    // navigation: {
    //     nextEl: '.h1n',
    //     prevEl: '.h1p',
    // },

    // Pagination
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },



}

export default function Gallery() {
    return (
        <>
        {/*Gallery Two Start */}
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

                            {/*Gallery Two Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="gallery-two__single-wrap">
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
                                                                    href="project-details"> IS 303 - MR Grade</Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-1.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
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
                                                                    href="project-details">IS 710 - MARINE Grade</Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-2.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
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
                                                                    href="project-details">IS 10701 - BWP Grade </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-3.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
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
                                                                    href="project-details">IS 5509 - FIRE RETARDANT Grade</Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-4.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">IS 1659 - Block Board </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-4.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">IS 4990 - SHUTTERING Grade </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-4.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Chequered & Truck flooring</Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-4.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Particle board </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-4.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Bamboo sheet</Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-4.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">MDF / HDF / HDHMR </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-4.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">PVC / WPC / WPC FRAME </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-4.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">DOOR </Link></h3>
                                                            {/* <p className="gallery-two__text">Lorem Ipsum is simply dum text
                                                                of <br/>the printing and typesetting</p> */}
                                                        </div>
                                                        {/* <div className="gallery-two__plus">
                                                            <Link href="assets/images/gallery/gallery-2-4.jpg"
                                                                className="img-popup"><span className="icon-plus"></span></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Gallery Two Single End*/}
                            {/*Gallery Two Single Start*/}
                           
                            {/*Gallery Two Single End*/}
                            {/*Gallery Two Single Start*/}
                           
                            {/*Gallery Two Single End*/}
                        </div>
                    </Swiper>
                    {/* If we need navigation buttons */}
                    {/* <div className="gallery-two__nav">
                        <div className="swiper-button-prev1">
                            <i className="icon-arrow-left"></i>
                        </div>
                        <div className="swiper-button-next1">
                            <i className="icon-arrow-right"></i>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        {/*Gallery Two End */}
        </>
    )
}
