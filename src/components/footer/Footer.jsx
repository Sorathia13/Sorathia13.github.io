import React from 'react';
import './footer.css';
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container container">
                <img src={Logo} alt="logo" className='footer_logo' />
                <span className="footer_copy">© 2023 Kimi Hsu. Tous droits réservés</span>
            </div>
        </div>
    )
}

export default Footer

