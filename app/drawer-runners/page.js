'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Project from "@/components/sections/home2/Project"
import Project2 from "@/components/sections/home2/Project2"
import Project4 from "@/components/sections/home2/Project4"

export default function Home() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Drawer Runners">      
        {/*Project Details Start*/}
        <section className="project-details" style={{paddingBottom:'400px'}}>
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/project/project-details-img-1.jpg" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Technical Specifications</h3>
                        <p className="project-details__information-text"></p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
    <p><span>Material:</span> Stainless steel / Galvanized steel</p>
</li>
<li>
    <p><span>Mounting Type:</span> Side-mount / Under-mount</p>
</li>
<li>
    <p><span>Load Capacity:</span> 30 kg – 45+ kg</p>
</li>
<li>
    <p><span>Available Lengths:</span> 250mm – 600mm</p>
</li>
<li>
    <p><span>Mechanisms:</span> Ball-bearing, Soft-close hydraulic, Push-to-open</p>
</li>
<li>
    <p><span>Finish:</span> Zinc plated, Black, Matte steel</p>
</li>

                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Drawer Runners<br/> Smooth, Silent & Durable <br/>Sliding Systems</h3>
                    <p className="project-details__text">Drawer Runners (also called Drawer Slides) are precision-engineered hardware mechanisms<br/>
                     that allow drawers to open and close smoothly. Built for durability and heavy loads, drawer <br/>
                     runners are essential for all types of modular furniture, kitchens, wardrobes, office units, and <br/>
                     storage systems.</p>
                </div>
            </div>
        </section>
<Project4 />
        {/*CTA One Start*/}
        {/* <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__shape-1">
                        <img src="assets/images/backgrounds/27.png" alt=""/>
                    </div>
                    <div className="cta-one__img">
                        <img src="assets/images/resources/ply.png" alt=""/>
                    </div>
                    <h3 className="cta-one__title">Strong Products,<br/> Lasting Interior Solutions</h3>
                    <div className="cta-one__from-box">
                        <form className="cta-one__form">
                            <div className="cta-one__input-box">
                                <input type="email" placeholder="Your E-mail" name="email"/>
                            </div>
                            <button type="submit" className="cta-one__btn thm-btn">Subscribe Us</button>
                        </form>
                    </div>
                </div>
            </div>
        </section> */}
        {/*CTA One End*/}
        </Layout>
        </>
    )
}