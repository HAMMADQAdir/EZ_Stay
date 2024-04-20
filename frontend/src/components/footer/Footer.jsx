import React from 'react';
import './footerStyle.css'; // Assuming you have your styles in a separate CSS file

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="footer-column">
                        <h4>EZStay</h4>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Terms & Condition</a></li>
                            <li><a href="">Testimonials</a></li>
                            <li><a href="">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Properties</h4>
                        <ul>
                            <li><a href="">House</a></li>
                            <li><a href="">Households</a></li>
                            <li><a href="">Appliance</a></li>
                            <li><a href="">Vehicle</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Feature</h4>
                        <ul>
                            <li><a href="">Find Property</a></li>
                            <li><a href="">List Your Property</a></li>
                            <li><a href="">Rent Calculator</a></li>
                            <li><a href="">Pay Rent</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Feedback</h4>
                        <form action="">
                            <input type="text" placeholder="Your Name" className="inputName" />
                            <input type="email" placeholder="Your email" className="inputEmail" />
                            <input type="submit" value="Submit" className="inputSubmit" />
                        </form>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <p>&#169; 2024 EZStay All Rights Reserved.</p>
                    </div>
                    <div className="socialIcons">
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                        <a href=""><i className="fa-brands fa-youtube"></i></a>
                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
