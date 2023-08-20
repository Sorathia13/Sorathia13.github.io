import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact section" id='contact'>
            <h2 className="section_title">Contactez-moi</h2>
            <span className="section_subtitle">Pour une opportunité ou un projet</span>

            <div className="contact_container container grid">
                <div className="contact_card">
                    <i class="uil uil-envelope-alt contact_icon"></i>
                    <h3 className="contact_card-title">Email</h3>
                    <span className="contact_card-data">kimihsu13@gmail.com</span>
                </div>

                <div className="contact_card">
                    <i class="uil uil-mobile-android-alt contact_icon"></i>
                    <h3 className="contact_card-title">Téléphone</h3>
                    <span className="contact_card-data">06 68 21 50 27</span>
                </div>
            </div>
        </div>
    )
}

export default Contact