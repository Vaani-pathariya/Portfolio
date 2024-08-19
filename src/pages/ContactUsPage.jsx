import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import toast, { Toaster } from "react-hot-toast";

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        user_email: '',
        user_name: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        // Regular expression for basic email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateEmail(formData.user_email)) {
            toast.error("Invalid email address. Please enter a valid email.");
            return;
        }

        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,  // Replace with your EmailJS service ID
            process.env.REACT_APP_TEMPLATE_ID,  // Replace with your EmailJS template ID
            formData,
            process.env.REACT_APP_USER_ID // Replace with your EmailJS user ID
        ).then((result) => {
            console.log('Email successfully sent!', result.text);
            toast.success("Message sent successfully");
            setFormData({ user_email: '', user_name: '', message: '' }); // Reset form
        }, (error) => {
            console.error('There was an error sending the email:', error.text);
            toast.error("Failed to send message. Please try again later.");
        });
    };

    return (
        <div className="px-12 pb-10" id="contact">
            <div><Toaster/></div>
            <div className="w-max relative pt-5">
                <div className="h-10 bg-newGreen rounded-xl w-full absolute ml-2 mt-2 z-0"></div>
                <div className="border border-white w-fit rounded-xl px-4 py-1 bg-lightBlack h-10 z-10 relative text-lg">
                    CONTACT US
                </div>
            </div>
            <div className="lg:flex mt-10">
            <div className="lg:w-1/2 bg-lightBlack rounded-3xl px-16 order-2">
                    <form onSubmit={sendEmail}>
                        <div className="text-5xl mt-12 mb-5 text-newGreen pt-5 lg:pt-0">Get In Touch!</div>
                        <input
                            type="text"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            placeholder="Enter your Email"
                            className="pb-2 text-xl w-full my-7 bg-lightBlack placeholder-gray-600 text-white border-b-2 border-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            placeholder="Enter your Name"
                            className="pb-2 text-xl w-full my-7 bg-lightBlack placeholder-gray-600 text-white border-b-2 border-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your Message"
                            className="pb-2 text-xl w-full my-7 bg-lightBlack placeholder-gray-600 text-white border-b-2 border-white focus:outline-none"
                        />
                        <button type="submit" className="bg-newGreen text-xl rounded-lg px-6 py-2 my-10">SEND</button>
                    </form>
                </div>
                <div className="lg:w-1/2 pr-10 order-1 mt-5 lg:mt-0">
                    <div className="text-5xl mb-10">Let's Get In Touch</div>
                    <div>Let's connect and work together</div>
                    <hr className="mt-10"></hr>
                    <div className="text-4xl font-semibold mt-5">Socials</div>
                    <Link to="mailto:vaanipathariya@gmail.com">
                        <div className="border w-fit rounded-3xl mt-4 px-8 py-3 border-newGreen">vaanipathariya@gmail.com</div>
                    </Link>
                    <div className="flex mt-5">
                        <Link to="https://github.com/Vaani-pathariya"><FaGithub size='2.5rem' className="mr-3" /></Link>
                        <Link to="https://www.linkedin.com/in/vaani-pathariya/"><FaLinkedin size='2.5rem' className="mr-3" /></Link>
                        <Link to="https://leetcode.com/u/vaanipathariya/"><SiLeetcode size='2.5rem' className="mr-3" /></Link>
                        <Link to="https://x.com/PathariyaVaani"><BsTwitterX size='2.5rem' /></Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ContactUsPage;
