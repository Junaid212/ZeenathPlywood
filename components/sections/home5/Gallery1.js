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

export default function Gallery1() {
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
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://www.acrylic.com.my/wp-content/uploads/2019/09/Capture-22.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Acrylic sheets</Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://5.imimg.com/data5/HT/OG/WC/SELLER-31340253/pvc-laminate-sheet.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Pvc </Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/302311946/JI/VI/QJ/65926156/royal-touch-laminate-sheet-1-25mm-500x500.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">1.25mm Laminate </Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://images.jdmagicbox.com/quickquotes/images_main/1-mm-sunmica-laminate-2216948391-dtq5o1f6.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">1mm Laminate</Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://www.amulyamica.com/cdn/shop/articles/0.8_mm_laminate.png?v=1720005469" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">0.8mm Laminate </Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT43GccgPSkv56H5JY2LtpzWmOMoFTkSCGwDA&s" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Liner Laminate</Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://hylamsheets.com/wp-content/uploads/2018/04/decolam-sheets-or-mica-sheets-2019508.jpeg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Hylam </Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="assets/images/gallery/gallery-2-4.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title"><Link
                                                                    href="project-details">Particle board </Link></h3>
                                                        </div>
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
                                                        </div>
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
                                                        </div>
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
                                                        </div>
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
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