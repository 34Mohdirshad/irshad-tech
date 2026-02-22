import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <a href="#" className="logo">
                        Irshad <span className="text-gradient">Tech</span>
                    </a>
                    <p className="footer-desc">
                        We build modern websites that grow your business. Expert solutions for startups and enterprises.
                    </p>
                    <div className="social-links">
                        <a href="https://linkedin.com/in/mohd-irshad-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">IN</a>
                        <a href="https://github.com/34Mohdirshad" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
                    </div>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Our Work</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact</h3>
                    <p>Aligarh, Uttar Pradesh, India</p>
                    <p>mohdirshadmi36542@gmail.com</p>
                    <p>+91-9045338516</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Irshad Tech Solutions. All rights reserved.</p>
                <p>Founder: Mohd Irshad</p>
            </div>
        </footer>
    );
};

export default Footer;
