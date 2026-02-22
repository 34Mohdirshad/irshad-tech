import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>
            <div className="container hero-container animate-fade-in">
                <div className="hero-content">
                    <h1 className="hero-title">
                        We Build Modern Websites That <span className="text-gradient">Grow Your Business</span>
                    </h1>
                    <p className="hero-subtitle">
                        Stand out in the digital world. At Irshad Tech Solutions, we design stunning, fast, and SEO-optimized web experiences tailored for startups and enterprises globally.
                    </p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">Get Free Consultation</a>
                        <a href="#portfolio" className="btn btn-outline">View Portfolio</a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="glass-card mockup-card">
                        <div className="mockup-header">
                            <span className="dot dot-red"></span>
                            <span className="dot dot-yellow"></span>
                            <span className="dot dot-green"></span>
                        </div>
                        <div className="mockup-body profile-mockup">
                            <img src="/profile.png" alt="Mohd Irshad" className="profile-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
