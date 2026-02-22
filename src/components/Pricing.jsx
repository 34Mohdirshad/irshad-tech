import './Pricing.css';

const packages = [
    {
        name: 'Basic Website',
        price: '$499',
        desc: 'Perfect for small businesses establishing their online presence.',
        features: ['Custom 5-Page Design', 'Mobile Responsive', 'Contact Form Integration', 'Basic SEO Setup', '1 Month Free Support'],
        recommended: false
    },
    {
        name: 'Professional',
        price: '$999',
        desc: 'Ideal for growing companies needing advanced features.',
        features: ['Up to 10 Pages', 'Custom UI/UX Design', 'CMS Integration', 'Advanced SEO & Speed', 'Google Analytics Setup', '3 Months Support'],
        recommended: true
    },
    {
        name: 'Business Premium',
        price: 'Custom',
        desc: 'Full-scale web application for enterprises and custom startups.',
        features: ['Unlimited Pages', 'Full-stack Development', 'Custom Dashboard/Portal', 'Payment Gateway Sync', 'Priority 24/7 Support'],
        recommended: false
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="section pricing">
            <div className="container">
                <h2 className="section-title text-center">Transparent <span className="text-gradient">Pricing</span></h2>
                <p className="section-subtitle">
                    Invest in a digital foundation configured for long-term ROI. No hidden fees.
                </p>

                <div className="pricing-grid">
                    {packages.map((pkg, index) => (
                        <div className={`pricing-card glass-card ${pkg.recommended ? 'recommended' : ''}`} key={index}>
                            {pkg.recommended && <div className="badge">Most Popular</div>}
                            <h3 className="pkg-name">{pkg.name}</h3>
                            <p className="pkg-desc">{pkg.desc}</p>
                            <div className="pkg-price">
                                <span className="price">{pkg.price}</span>
                            </div>
                            <ul className="pkg-features">
                                {pkg.features.map((feature, i) => (
                                    <li key={i}><span className="check">✓</span> {feature}</li>
                                ))}
                            </ul>
                            <a href="#contact" className={`btn ${pkg.recommended ? 'btn-primary' : 'btn-outline'} w-100`}>
                                Choose Plan
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
