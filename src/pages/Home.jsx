import React from "react";
import circles from "../assets/1694881917355.jpeg"
import { TiSocialLinkedin } from "react-icons/ti";
import { LuGithub } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
    return (
        <div className="mt-20 pt-10 w-full">
            <div>
                <div className="ml-12 w-max relative">
                    <div className="h-10 bg-newGreen rounded-xl w-full absolute ml-2 mt-2 z-0"></div>
                    <div className="border border-white w-fit rounded-xl px-4 py-1 bg-lightBlack h-10 z-10 relative text-lg">
                        Hello, I'm Vaani Pathariya
                    </div>
                </div>
                <div className="flex justify-between">
                <div className="ml-12 text-7xl w-7/12 mt-10">
                    I'm a <span className="text-newGreen">Full Stack Web Developer</span> & Machine Learning Enthusiast
                    <div className="text-lg mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus dignissimos beatae dolores quam neque ad sint voluptatibus autem aspernatur quae, provident fuga consequuntur quia reiciendis blanditiis quas praesentium facere?</div>
                    <div className="flex mt-10">
                    <div className="border rounded-lg w-52">
                        <div className="flex justify-between">
                        <TiSocialLinkedin/>
                        <MdArrowOutward/>
                        </div>
                        <div>
                        1.2k
                        </div>
                    </div>
                    <div className="border rounded-lg mx-5 w-52">
                        <div className="flex justify-between">
                        <LuGithub/>
                        <MdArrowOutward/>
                        </div>
                        <div>
                        1.2k
                        </div>
                    </div>
                    <div className="border rounded-lg w-52">
                        <div className="flex justify-between">
                        <RiTwitterXFill/>
                        <MdArrowOutward/>
                        </div>
                        <div>
                        1.2k
                        </div>
                    </div>
                    </div>
                </div>
            
                <img
                        src={circles}
                        className="mr-12 w-4/12"
                        style={{ borderRadius: '50%', maxWidth: '400px', maxHeight: '400px', objectFit: 'cover' }}
                        alt="Profile"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
