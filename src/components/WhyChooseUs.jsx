import './WhyChooseUs.css';

const reasons = [
    { title: 'Fast Delivery', desc: 'Rapid execution without compromising on code quality or user experience.', icon: '⚡' },
    { title: 'Affordable Pricing', desc: 'Enterprise-grade solutions at rates tailored for startups and small businesses.', icon: '💰' },
    { title: 'Clean Code', desc: 'Scalable, maintainable, and well-documented codebase for future growth.', icon: '⌨️' },
    { title: 'Ongoing Support', desc: '24/7 technical assistance and continuous maintenance post-launch.', icon: '🤝' },
    { title: 'SEO Friendly Websites', desc: 'Built-in best practices to ensure you rank high on search engines from day one.', icon: '🎯' },
];

const WhyChooseUs = () => {
    return (
        <section className="section why-choose-us text-center">
            <div className="container">
                <h2 className="section-title">Why <span className="text-gradient">Choose Us</span></h2>
                <p className="section-subtitle">
                    We don't just build websites; we build digital assets that generate revenue and scale your business.
                </p>

                <div className="reasons-grid">
                    {reasons.map((reason, index) => (
                        <div className="reason-item glass-card" key={index}>
                            <div className="reason-icon">{reason.icon}</div>
                            <h3>{reason.title}</h3>
                            <p>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
