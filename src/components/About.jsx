import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title text-center">About <span className="text-gradient">Us</span></h2>
                <p className="section-subtitle">
                    Empowering businesses with cutting-edge web technologies and data-driven digital strategies.
                </p>

                <div className="about-grid">
                    <div className="about-content">
                        <h3>Our Mission & Vision</h3>
                        <p>
                            At Irshad Tech Solutions, our mission is to provide start-ups, small businesses, and international
                            clients with world-class digital products. We envision a digital landscape where every business,
                            regardless of size, has the tools to succeed and grow.
                        </p>
                        <p>
                            We focus on delivering high-performance, seamless user experiences customized to your business goals.
                        </p>
                    </div>

                    <div className="about-tech">
                        <h3>Our Expertise</h3>
                        <div className="tech-tags">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">Node.js</span>
                            <span className="tech-tag">PHP</span>
                            <span className="tech-tag">MySQL</span>
                            <span className="tech-tag">UI/UX Design</span>
                            <span className="tech-tag">SEO</span>
                            <span className="tech-tag">Growth Strategy</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
