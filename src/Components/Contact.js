import React, { useState } from "react";
import axios from "axios";
import "../Styles/Contact.css";
import "../Styles/About.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Simulate API call using Axios
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">
        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message*"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit">Send Message</button>
          {submitted && <p className="success">Message sent successfully!</p>}
        </form>

        {/* Contact Info + Map */}
        <div className="contact-details">
          <h3>Clinic Address</h3>
          <p>16-6-104 to 109, Old Kamal Theater Complex,<br />
          Opp Niagara Hotel, Chaderghat, Hyderabad, Telangana 500024</p>

          <p><strong>Phone:</strong> +91 99127 25181</p>
          <p><strong>Email:</strong> pbushrabanu@gmail.com</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7409264464637!2d78.49054837492106!3d17.423498301848455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9915889c4567%3A0x730e99343b933894!2sNiagara%20Hotel!5e0!3m2!1sen!2sin!4v1721023400000"
            width="100%"
            height="250"
            style={{ border: "0", marginTop: "1rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
