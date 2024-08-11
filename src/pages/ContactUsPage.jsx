import React from "react";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const ContactUsPage = () => {
    return (
        <div className="px-12 pb-10">
            <div className="w-max relative pt-5">
                <div className="h-10 bg-newGreen rounded-xl w-full absolute ml-2 mt-2 z-0"></div>
                <div className="border border-white w-fit rounded-xl px-4 py-1 bg-lightBlack h-10 z-10 relative text-lg">
                    CONTACT US
                </div>
            </div>
            <div className="flex mt-10">
                <div className="w-1/2 pr-10">
                    <div className="text-5xl mb-10">Let's Get In Touch</div>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae impedit est earum repellendus, atque esse quam. Distinctio eius voluptate similique, excepturi vel, natus quidem alias explicabo suscipit ullam neque nostrum.</div>
                    <hr className="mt-10"></hr>
                    <div className="text-4xl font-semibold mt-5">Socials</div>
                    <div className="border w-fit rounded-3xl mt-4 px-8 py-3 border-newGreen">vaanipathariya@gmail.com</div>
                    <div className="flex mt-5">
                        <FaGithub size='2.5rem' className="mr-3"/>
                        <FaLinkedin size='2.5rem' className="mr-3"/>
                        <SiLeetcode size='2.5rem' className="mr-3"/>
                        <BsTwitterX size='2.5rem'/>
                    </div>
                </div>
                <div className="w-1/2 bg-lightBlack rounded-3xl px-16">
                    <div className="text-5xl mt-12 mb-5 text-newGreen">Get In Touch!</div>
                    <input
                        type="text"
                        placeholder="Enter your Email"
                        className=" pb-2 text-xl w-full my-7 bg-lightBlack placeholder-gray-600 text-white border-b-2 border-white focus:outline-none"
                    /><input
                    type="text"
                    placeholder="Enter your Phone Number"
                    className="pb-2 text-xl w-full my-7  bg-lightBlack placeholder-gray-600 text-white border-b-2 border-white focus:outline-none"
                />
                <input
                        type="text"
                        placeholder="Enter your Message"
                        className="pb-2 text-xl w-full my-7 bg-lightBlack placeholder-gray-600 text-white border-b-2 border-white focus:outline-none"
                    />
                <button className="bg-newGreen text-xl rounded-lg px-6 py-2 my-10">SEND</button>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;
