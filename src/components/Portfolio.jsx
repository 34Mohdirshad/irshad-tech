import './Portfolio.css';

const projects = [
    {
        title: 'Business Dashboard',
        desc: 'A comprehensive analytics dashboard for enterprise resource planning.',
        tech: ['React', 'Node.js', 'Chart.js'],
        color: '#3b82f6'
    },
    {
        title: 'Fitness App UI',
        desc: 'A modern, responsive fitness tracking application UI designed for mobile.',
        tech: ['React Native', 'Framer Motion'],
        color: '#8b5cf6'
    },
    {
        title: 'E-commerce Platform',
        desc: 'High-conversion online store with seamless payment integration.',
        tech: ['Next.js', 'Stripe', 'Tailwind'],
        color: '#06b6d4'
    },
    {
        title: 'Zoom Clone',
        desc: 'Real-time video conferencing application for remote teams.',
        tech: ['WebRTC', 'Socket.io', 'React'],
        color: '#10b981'
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="section portfolio">
            <div className="container">
                <h2 className="section-title text-center">Featured <span className="text-gradient">Projects</span></h2>
                <p className="section-subtitle">
                    Explore some of our recent digital products that helped businesses scale and succeed.
                </p>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <div className="portfolio-card glass-card" key={index}>
                            <div className="portfolio-img-placeholder" style={{ background: `linear-gradient(135deg, ${project.color}33 0%, ${project.color}11 100%)`, borderBottom: `2px solid ${project.color}` }}>
                                <span>{project.title.charAt(0)}</span>
                            </div>
                            <div className="portfolio-content">
                                <h3 className="portfolio-title">{project.title}</h3>
                                <p className="portfolio-desc">{project.desc}</p>
                                <div className="portfolio-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-badge">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
