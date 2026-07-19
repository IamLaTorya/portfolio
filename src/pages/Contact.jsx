import { useState } from "react";

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);


    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }


    function handleSubmit(event) {
        event.preventDefault();

        setError("");
        setSuccess(false);


        if (!formData.name || !formData.email || !formData.message) {
            setError("Please complete all fields.");
            return;
        }


        if (!formData.email.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }


        setSuccess(true);

        setFormData({
            name: "",
            email: "",
            message: ""
        });
    }


    return (
        <main className="contact-page">

            <section className="contact-header">

                <h1>Contact</h1>

                <p>
                    Let's build something meaningful together.
                </p>

            </section>


            <form 
                className="contact-form"
                onSubmit={handleSubmit}
            >

                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </label>


                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </label>


                <label>
                    Message
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                    />
                </label>


                {error && (
                    <p className="error-message">
                        ❌ {error}
                    </p>
                )}


                {success && (
                    <p className="success-message">
                        Thank you for reaching out! Connection Established ✅
                    </p>
                )}


                <button type="submit">
                    Send Message
                </button>

            </form>

        </main>
    );
}