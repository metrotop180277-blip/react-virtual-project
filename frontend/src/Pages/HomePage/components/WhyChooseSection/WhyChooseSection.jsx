import React from "react";
import './WhyChooseSection.css'
import hello from './img/hellopeople.png'

function WhyChooseSection() {
    return (<>
        <section className="WhyChooseSection">
            <div className="WhyChooseSection-text">
                <div className="WhyChooseSection-pod-text">
                    <h3 className="WhyChooseSection-pod-text-h3">
                    WHY CHOOSE US
                    </h3>
                    <h1 className="WhyChooseSection-pod-text-h1">
                    Why Choose Us for Your VR Needs 
                    </h1>
                </div>
                <div className="WhyChooseSection-details">
                    <details>
                        <summary className="WhyChooseSection-details-summary"><b>Passionate and Experienced Team</b></summary>
                        <p className="WhyChooseSection-details-p">We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.</p>
                    </details>
                    <details>
                        <summary className="WhyChooseSection-details-summary"><b>Customized Solutions</b></summary>
                        <p className="WhyChooseSection-details-p">We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.</p>
                    </details>
                    <details>
                        <summary className="WhyChooseSection-details-summary"><b>Exceptional Customer Service</b></summary>
                        <p className="WhyChooseSection-details-p">We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.</p>
                    </details>
                </div>
            </div>
            <div className="WhyChooseSection-image">
                <img src={hello} alt="" />
            </div>
        </section>
    </>)
}

export default WhyChooseSection