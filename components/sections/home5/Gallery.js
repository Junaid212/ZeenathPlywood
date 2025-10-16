
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
                                                        <img src="https://5.imimg.com/data5/SELLER/Default/2020/9/FD/JN/BS/104939636/plyneer-gold-bwp-710-marine-plywood.jpg" alt=""/>
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
                                                        <img src="https://5.imimg.com/data5/SELLER/Default/2023/3/293828571/OM/GW/QL/63628889/greenply-club-is-10701-grade-plywood-500x500.jpg" alt=""/>
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
                                                        <img src="https://assets.bldnxt.in/catalog/product/cache/1/image/a77c1558d860704591e3027d1ebed402/s/h/shha691949_greenply691949_5d2727929ed5e.png" alt=""/>
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
                                                        <img src="https://5.imimg.com/data5/SELLER/Default/2025/6/522690428/DR/ET/YJ/6362173/wooden-block-board-and-ply-make-archid-with-7-years-warranty.jpg" alt=""/>
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
                                                        <img src="https://4.imimg.com/data4/XT/OT/MY-6260483/filmface-975x1024-500x500.jpg" alt=""/>
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
                                                        <img src="https://5.imimg.com/data5/BS/SW/TK/SELLER-3664549/chequered-plywood-500x500.jpeg" alt=""/>
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
                                                        <img src="https://www.longtermplywood.com/icms/upload/6f20e430b05511ef969b2503e85228bd/pic/productmanager-productpic/031da530bda611efbd8381e1dd49f880/Directory/melamine%20laminated%20particle%20board_1734570618627.webp" alt=""/>
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
                                                        <img src="https://images.jdmagicbox.com/quickquotes/images_main/-fl047im1.jpg" alt=""/>
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
                                                        <img src="https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Medium/hdhmr-mdf-boards-thickness-1-20250212170522359.jpg" alt=""/>
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
                                                        <img src="https://maicagroup.com/wp-content/uploads/2025/07/Lamination-WPC-Door-frames3.webp" alt=""/>
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
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaT9ndJlhmgWhG8-o_ebcYIEZZbu55ez-LA&s" alt=""/>
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
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://cdn.shopify.com/s/files/1/0616/1711/1178/files/BoxJoint11.jpg?v=1693233947" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">FINGER JOINT </Link></h3>
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
