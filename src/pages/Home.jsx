import React from "react";
import circles from "../assets/1694881917355.jpeg";
import { TiSocialLinkedin } from "react-icons/ti";
import { LuGithub } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import Counter from "../components/Counter"; // Import the Counter component
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="mt-20 pt-10 w-full" id="home">
            <div>
                <div className="lg:ml-12 w-max relative mx-auto">
                    <div className="h-10 bg-newGreen rounded-xl w-full absolute ml-2 mt-2 z-0"></div>
                    <div className="border border-white w-fit rounded-xl px-4 py-1 bg-lightBlack h-10 z-10 relative text-lg">
                        Hello, I'm Vaani Pathariya
                    </div>
                </div>
                <div className="lg:flex justify-between">
                <img
                        src={circles}
                        className="lg:mr-12 w-4/12 order-2 mx-auto mt-5 lg:mt-0"
                        style={{ borderRadius: '50%', maxWidth: '400px', maxHeight: '400px', objectFit: 'cover' }}
                        alt="Profile"
                    />
                    <div className="w-11/12 mx-auto lg:ml-12 text-3xl lg:text-7xl lg:w-7/12 text-center lg:text-left mt-10 order-1">
                        I'm a <span className="text-newGreen">Full Stack Web Developer</span> & Machine Learning Enthusiast
                        <div className="text-lg mt-8">
                            I'm a passionate final year computer science student with a deep love for technology and innovation. With a strong foundation in problem-solving, I'm excited to continue exploring the ever-evolving world of technology and making a positive impact.
                        </div>
                        <div className="lg:flex block mt-10 w-max mx-auto lg:mx-0">
                            <div className="border rounded-lg w-52 text-4xl p-2 bg-lightBlack mb-4">
                                <div className="flex justify-between">
                                    <TiSocialLinkedin size="3rem" />
                                    <Link to="https://www.linkedin.com/in/vaani-pathariya/" target="_blank"><MdArrowOutward size="3rem" /></Link>
                                </div>
                                <div>
                                    <Counter targetNumber="1.2k" duration={2000} />
                                </div>
                            </div>
                            <div className="border rounded-lg w-52 text-4xl p-2 lg:ml-4 bg-lightBlack mb-4">
                                <div className="flex justify-between">
                                    <LuGithub className="my-auto" />
                                    <Link to="https://github.com/Vaani-pathariya" target="_blank"><MdArrowOutward size="3rem" /></Link>
                                </div>
                                <div>
                                    <Counter targetNumber="70 Repos" duration={2000} />
                                </div>
                            </div>
                            <div className="border rounded-lg w-52 text-4xl p-2 lg:ml-4 bg-lightBlack">
                                <div className="flex justify-between">
                                    <RiTwitterXFill className="my-auto" />
                                    <Link to="https://x.com/PathariyaVaani" target="_blank"><MdArrowOutward size="3rem" /></Link>
                                </div>
                                <div>
                                    <Counter targetNumber="104" duration={2000} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
