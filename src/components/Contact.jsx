import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.target);
            const response = await fetch("https://formsubmit.co/ajax/mohdirshadmi36542@gmail.com", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setIsSuccess(true);
                e.target.reset();
                setTimeout(() => {
                    setIsSuccess(false);
                }, 5000);
            }
        } catch (error) {
            console.error("Form submission error", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="contact-container glass-card">
                    <div className="contact-info">
                        <h2>Let's Build Your <span className="text-gradient">Dream Website</span></h2>
                        <p className="contact-desc">
                            Ready to take your business to the next level? Contact us today for a free consultation and project estimation.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Aligarh, Uttar Pradesh, India</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <p>mohdirshadmi36542@gmail.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">📞</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91-9045338516</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        {isSuccess ? (
                            <div className="success-message glass-card" style={{ textAlign: 'center', padding: '3rem', borderColor: '#10b981', background: 'rgba(16, 185, 129, 0.1)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                                <h3>Message Sent Successfully!</h3>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Thank you for reaching out. We will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <input type="hidden" name="_subject" value="New Service Inquiry from Website!" />
                                <input type="hidden" name="_captcha" value="false" />
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" placeholder="john@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" placeholder="Tell us about your project..." required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
