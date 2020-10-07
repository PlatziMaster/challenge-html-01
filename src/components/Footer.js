import React from 'react';
import '../styles/components/Footer.css';




class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                    <figure className="Footer__fig">
                        <img src="../imgs/logo.png"  width="80px" height="25px" alt="logo"/>
                        <p>© 2018 Deck Component Based UI Kit </p>
                        
                    </figure>
                    <div className="Footer__container" >
                        <ul className="Footer__ul">
                            <li className="Footer__li">
                                <a className="Footer__li-a" href="/">TECHNOLOGY</a>
                                <a className="Footer__li-a1" href="/">IDEAS</a>
                            </li>
                            <li className="Footer__li">
                                <a className="Footer__li-a" href="/">LEADERSHIP</a>
                                <a className="Footer__li-a1"href="/">VIDEO</a>
                            </li>
                            <li className="Footer__li">
                                <a className="Footer__li-a" href="/">NEWS</a>
                                <a className="Footer__li-a1" href="/">FINANCE</a>
                            </li>
                            <li className="Footer__li">
                                <a className="Footer__li-a" href="/">ENTERTAINMENT</a>
                            </li>
                        </ul>
                    </div>
                    <div className="Footer__container-social">
                        <div className="Footer__media">
                            <p>Follow us:</p>
                            <a className="Footer__social facebook" href="https://www.facebook.com/sebastian.herrera.94064"></a>
                            <a className="Footer__social github" href="https://www.facebook.com/sebastian.herrera.94064"></a>
                            <a className="Footer__social instagram" href="https://www.facebook.com/sebastian.herrera.94064"></a>
                        </div>
                        <div className="input">
                            <input className="input__email" placeholder="Your E-mail"></input>
                            <button className="input__button" type="submit">SUBSCRIBE</button>
                        </div>
                    
                    </div>
            </div>
        )
        
    }
}

export default Footer;