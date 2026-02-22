import './Services.css';

const services = [
    {
        title: 'Website Design',
        desc: 'Modern, responsive UI/UX designs that captivate your audience and leave a lasting impression.',
        icon: '✨'
    },
    {
        title: 'Web Development',
        desc: 'Robust full-stack development using modern frameworks tailored to your business needs.',
        icon: '💻'
    },
    {
        title: 'SEO Optimization',
        desc: 'Boost your Google ranking, improve page speed, and increase your organic site traffic.',
        icon: '🚀'
    },
    {
        title: 'Business Consulting',
        desc: 'Strategic digital planning and growth blueprints to take your business to the next level.',
        icon: '📈'
    }
];

const Services = () => {
    return (
        <section id="services" className="section services">
            <div className="container">
                <h2 className="section-title text-center">Our <span className="text-gradient">Services</span></h2>
                <p className="section-subtitle">
                    Comprehensive digital solutions designed to accelerate your growth and dominate your market.
                </p>

                <div className="services-grid">
                    {services.map((srv, index) => (
                        <div className="service-card glass-card" key={index}>
                            <div className="service-icon">{srv.icon}</div>
                            <h3 className="service-title">{srv.title}</h3>
                            <p className="service-desc">{srv.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
