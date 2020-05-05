import React from 'react';
import Menu_footer from './Menu_footer'
import '../styles/components/Footer.scss';

function Footer(props) {
    return(
        <footer className="footer main__container">
            <div className="footer__logo">
                <p className="footer__logo--logo">Deck<span>.</span></p>
                <p className="footer__logo--year">@2018 Deck</p>
                <p className="footer__logo--description">Component base UI Kit</p>
            </div>
            <div>
                <Menu_footer />
            </div>
            <div className="footer__contact">
                <p className="footer__contact__follow">Follow us: <span><i class="fab fa-instagram-square"></i></span> <span><i class="fab fa-pinterest-square"></i></span> <span><i class="fab fa-twitter"></i></span> <span><i class="fab fa-facebook-f"></i></span></p>
                <form className="footer__contact__form">
                    <input type="text" placeholder="Your email" />
                    <input type="submit" value="Suscribite" />
                </form>
            </div>
            
        </footer>
    )
}

export default Footer;