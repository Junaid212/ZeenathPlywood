'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
}

export default function Gallery4() {
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
                                                        <img src="https://5.imimg.com/data5/SELLER/Default/2022/6/AC/XR/KO/153129402/cassa-3-catalogue-page-0004-500x500.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="seamless-louver-panels">Seamless Louver panels</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://images.jdmagicbox.com/quickquotes/images_main/rang-ea-39-beige-charcoal-decorative-wall-panel-2221798979-j44jdgyf.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="charcoal-sheets">Charcoal sheets</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://www.iforinterior.in/cdn/shop/files/MG_12_2288fd54-677c-4020-9a4c-59606422c1c7.jpg?v=1723540953" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="mosaic-panels">Mosaic panels</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://naturalartisanhome.com/wp-content/uploads/2023/08/natural-square-weave-cane-webbing-W.webp" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="ratan-cane-rolls">Ratan Cane rolls</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://cpimg.tistatic.com/06069312/b/4/extra-06069312.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="mirror-engraved-panels">Mirror engraved panels</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://norcalaccentwalls.com/wp-content/uploads/2024/09/Wainscoting.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="wainscoting">Wainscoting</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://png.pngtree.com/thumb_back/fh260/background/20231003/pngtree-luxurious-vertical-gold-panel-bars-pattern-wall-texture-stunning-3d-rendering-image_13509473.png" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="gold-bar">Gold Bar</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://pic.stonecontact.com/picture201511/20194/132622/artificial-marble-vein-alabaster-sheet-wall-panel-p722873-2b.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="alabaster">Alabaster</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://5.imimg.com/data5/SELLER/Default/2023/8/337904675/TE/US/AS/2436748/rubber-cork-sheets.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="cork-sheets">Cork sheets</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://www.glopanels.com/unlockcms/Images/Product/Large/133130696025055754.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="charcofab-fabric-panels">Charcofab fabric panels</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://cpimg.tistatic.com/1137917/b/4/cement-board.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="fibre-cement-boards">Fibre cement boards</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://clayimports.com/cdn/shop/files/Tigre-Breeze-Block-Clay-Imports-Design-North-Arrow-Studio-Cary-Paul-Studios-1.jpg?v=1738942638" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="terra-blocks">Terra blocks</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://clayimports.com/cdn/shop/products/Petalo_Terracotta-Breeze-Blocks_ClayImports_DesignbyHowdyVintage_4.jpg?v=1745419083&width=1946" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="breeze-blocks">Breeze blocks</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyWg1O9T5CpKRxjqKAJ-zBqHziI3QF_dpww&s" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="clayneer">Clayneer</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://d68pxkftt5390.cloudfront.net/image/b6957c08-7f5d-4bef-9af6-3f34d7b994d9.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="hd-hmr-fluted-panels">HD-HMR Fluted Panels</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/WV/RE/VX/131598824/a5c6022c4e011d266eaa61432b4b394b.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="mdf-grill-board">MDF Grill board</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://5.imimg.com/data5/LG/CM/MY-2658927/glo-mdf-wave-board.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="mdf-wave-board">MDF wave board</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6">
                                            <div className="gallery-two__single">
                                                <div className="gallery-two__img-box">
                                                    <div className="gallery-two__img">
                                                        <img src="https://www.elen.in/wp-content/uploads/2020/11/3-5.jpg" alt=""/>
                                                    </div>
                                                    <div className="gallery-two__content">
                                                        <div className="gallery-two__title-box">
                                                            <h3 className="gallery-two__title">
                                                                <Link href="artificial-gardening">Artificial Gardening</Link>
                                                            </h3>
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