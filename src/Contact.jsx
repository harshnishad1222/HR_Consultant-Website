import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 2rem 5rem;
    background: linear-gradient(to right, #f9fafb, #f1f5f9);

    .common-heading {
      text-align: center;
      font-size: 3.6rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 2rem;
      animation: fadeInDown 0.7s ease-in-out;
    }

    iframe {
      border-radius: 1rem;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      margin-bottom: 4rem;
    }

    .container {
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;
        background-color: #ffffff;
        padding: 3rem 2rem;
        border-radius: 1rem;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        animation: fadeInUp 1s ease-in-out;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          input,
          textarea {
            padding: 1.2rem 1.5rem;
            border: 1px solid #cbd5e1;
            border-radius: 0.5rem;
            font-size: 1.6rem;
            font-family: inherit;
            transition: all 0.3s ease;
            background-color: #f8fafc;

            &:focus {
              outline: none;
              border-color: #6366f1;
              box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
              background-color: #fff;
            }
          }

          input[type="submit"] {
            background-color: #4f46e5;
            color: white;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;

            &:hover {
              background-color: #4338ca;
              transform: translateY(-3px) scale(1.03);
              box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
            }
          }
        }
      }
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      padding: 6rem 1rem 3rem;

      .common-heading {
        font-size: 2.8rem;
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact Us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1071568.3114257662!2d80.4228070532396!3d26.335434786816787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ace58277c70c3%3A0xc4899721013889b3!2sAtrampur%20Urf%20Nawabganj%2C%20Uttar%20Pradesh%20212412!5e0!3m2!1sen!2sin!4v1712490194148!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xanooakd"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Your Message"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
