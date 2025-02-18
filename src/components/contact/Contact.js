import React, { useRef, useState } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            await Swal.fire({
                icon: "error",
                title: "Configuration Error",
                text: "Email service is not configured properly.",
            });
            return;
        }

        setIsSending(true);
        try {
            const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
            await Swal.fire({
                icon: "success",
                title: "Success",
                text: "Your message has been sent successfully.",
            });
            console.log(result.text);
            e.target.reset();
        } catch (error) {
            await Swal.fire({
                icon: "error",
                title: "Error",
                text: "Something went wrong. Please try again.",
            });
            console.error(error.text);
        } finally {
            setIsSending(false);
        }
    };

    const contactOptions = [
        {
            icon: <MdOutlineEmail className="contact__option-icon" />,
            title: "Email",
            subtitle: "alaverdyan.edgar1993@gmail.com",
            link: "mailto:alaverdyan.edgar1993@gmail.com",
        },
        {
            icon: <RiMessengerLine className="contact__option-icon" />,
            title: "Messenger",
            subtitle: "Edgar Alaverdyan",
            link: "https://m.me/edgar.alaverdyan.93",
        },
        {
            icon: <RiWhatsappLine className="contact__option-icon" />,
            title: "Whatsapp",
            subtitle: "+374 94700030",
            link: "https://api.whatsapp.com/send?phone=37494700030",
        },
        {
            icon: <FaTelegramPlane className="contact__option-icon" />,
            title: "Telegram",
            subtitle: "@Edgar_Alaverdyan",
            link: "https://t.me/Edgar_Alaverdyan",
        },
    ];

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    {contactOptions.map((option, index) => (
                        <div key={index} className="contact__option">
                            {option.icon}
                            <h4>{option.title}</h4>
                            <h5>{option.subtitle}</h5>
                            <a href={option.link} target="_blank" rel="noopener noreferrer">
                                Send a message
                            </a>
                        </div>
                    ))}
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary" disabled={isSending}>
                        {isSending ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
