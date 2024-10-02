import React, { useState } from "react";
import "./Footer.css";

function Footer() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus("");

        try {
            const response = await fetch("https://formspree.io/f/xblrnndyb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setFormStatus("Error sending message. Please try again.");
            }
        } catch (error) {
            setFormStatus("Failed to send message. Please try later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>ELESA</h2>
                    <p>Empowering students through collaboration and innovation.</p>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/wcesELESA?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com/elesa_wce/profilecard/?igsh=MXRjODFmY2o3M3Z5bg==" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/company/elesa-wce/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Submit"}
                        </button>
                    </form>
                    {formStatus && <p className="form-status">{formStatus}</p>}
                </div>
            </div>
            <div className="footer-map">
                <h3>Find Us Here</h3>
                {/* Replace 'YOUR_LOCATION' with your actual Google Maps location link */}
                <a href="https://www.google.com/maps/place/Walchand+College+of+Engineering/@16.8457438,74.5988826,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc1237f52c65db5:0xa3535676176ded0a!8m2!3d16.8457387!4d74.6014575!16zL20vMDVoZG5q?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                </a>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ELESA. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
