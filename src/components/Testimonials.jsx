import './Testimonials.css';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, StartupLaunch',
        text: '"Irshad Tech Solutions transformed our online presence. Our new website is lightning fast, and we saw a 40% increase in lead generation within the first month."',
        rating: 5
    },
    {
        name: 'Michael Chen',
        role: 'Founder, FitLife App',
        text: '"The team delivered our fitness platform UI ahead of schedule. Their attention to modern design aesthetics and smooth user experiences is unmatched."',
        rating: 5
    },
    {
        name: 'David Smith',
        role: 'Director, Enterprise Solutions',
        text: '"Professional, communicative, and technically brilliant. They built a custom business dashboard that perfectly integrates with our complex workflows."',
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="section testimonials">
            <div className="container">
                <h2 className="section-title text-center">Client <span className="text-gradient">Success Stories</span></h2>
                <p className="section-subtitle">
                    Don't just take our word for it. Here's what our international clients have to say about working with us.
                </p>

                <div className="testimonial-grid">
                    {testimonials.map((test, index) => (
                        <div className="testimonial-card glass-card" key={index}>
                            <div className="stars">
                                {Array.from({ length: test.rating }).map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                            <p className="testimonial-text">{test.text}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{test.name.charAt(0)}</div>
                                <div>
                                    <h4 className="author-name">{test.name}</h4>
                                    <p className="author-role">{test.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
