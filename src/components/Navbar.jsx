import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [page, setPage] = useState("Home");
    const [open, setOpen] = useState(false);

    const changeNavbar = (value) => {
        setPage(value);
        setOpen(false); // Close the menu after clicking
    };

    return (
        <>
            {/* Desktop Navbar */}
            <div className="pt-3 hidden lg:block lg:fixed w-full z-20">
                <div className="bg-lightBlack w-10/12 rounded-3xl mx-auto flex text-lg border border-gray-400">
                    <HashLink
                        to="#home"
                        smooth
                        className={`px-6 rounded-3xl my-1.5 mx-2 py-1.5 cursor-pointer ${page === "Home" ? "bg-newGreen" : ""}`}
                        onClick={() => changeNavbar("Home")}
                    >
                        Home
                    </HashLink>
                    <HashLink
                        to="#skills"
                        smooth
                        className={`px-6 rounded-3xl my-1.5 mx-auto py-1.5 cursor-pointer ${page === "Skills" ? "bg-newGreen" : ""}`}
                        onClick={() => changeNavbar("Skills")}
                    >
                        Skills
                    </HashLink>
                    <HashLink
                        to="#experience"
                        smooth
                        className={`px-6 rounded-3xl my-1.5 mx-auto py-1.5 cursor-pointer ${page === "Experience" ? "bg-newGreen" : ""}`}
                        onClick={() => changeNavbar("Experience")}
                    >
                        Experience
                    </HashLink>
                    <Link 
                        to="https://www.linkedin.com/in/vaani-pathariya/overlay/1725976682915/single-media-viewer/?profileId=ACoAADgxUHMByPmrmxcLrJupmTE_mvM498-YBDo"
                        target="_blank"
                        className={`px-6 rounded-3xl my-1.5 mx-auto py-1.5 cursor-pointer ${page === "Resume" ? "bg-newGreen" : ""}`}
                        onClick={() => changeNavbar("Resume")}
                    >
                        Resume
                    </Link>
                    <HashLink
                        to="#achievements"
                        smooth
                        className={`px-6 rounded-3xl my-1.5 mx-auto py-1.5 cursor-pointer ${page === "Achievements" ? "bg-newGreen" : ""}`}
                        onClick={() => changeNavbar("Achievements")}
                    >
                        Achievements
                    </HashLink>
                    <HashLink
                        to="#projects"
                        smooth
                        className={`px-6 rounded-3xl my-1.5 mx-auto py-1.5 cursor-pointer ${page === "Projects" ? "bg-newGreen" : ""}`}
                        onClick={() => changeNavbar("Projects")}
                    >
                        Projects
                    </HashLink>
                    <HashLink
                        to="#contact"
                        smooth
                        className={`px-6 rounded-3xl my-1.5 mx-2 py-1.5 cursor-pointer ${page === "Contact" ? "bg-newGreen" : ""}`}
                        onClick={() => changeNavbar("Contact")}
                    >
                        Contact
                    </HashLink>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden fixed z-20 w-full bg-black">
                <AiOutlineMenu onClick={() => setOpen(!open)} className="m-5 cursor-pointer"  size="1.5rem"/>
                {open && (
                    <div className=" w-full">
                        <div className="flex flex-col items-center py-5">
                            <HashLink
                                to="#home"
                                smooth
                                className={`px-6 rounded-3xl my-1.5 py-1.5 cursor-pointer ${page === "Home" ? "bg-newGreen" : ""}`}
                                onClick={() => changeNavbar("Home")}
                            >
                                Home
                            </HashLink>
                            <HashLink
                                to="#skills"
                                smooth
                                className={`px-6 rounded-3xl my-1.5 py-1.5 cursor-pointer ${page === "Skills" ? "bg-newGreen" : ""}`}
                                onClick={() => changeNavbar("Skills")}
                            >
                                Skills
                            </HashLink>
                            <HashLink
                                to="#experience"
                                smooth
                                className={`px-6 rounded-3xl my-1.5 py-1.5 cursor-pointer ${page === "Experience" ? "bg-newGreen" : ""}`}
                                onClick={() => changeNavbar("Experience")}
                            >
                                Experience
                            </HashLink>
                            <Link 
                                to="https://www.linkedin.com/in/vaani-pathariya/overlay/1725976682915/single-media-viewer/?profileId=ACoAADgxUHMByPmrmxcLrJupmTE_mvM498-YBDo"
                                target="_blank"
                                className={`px-6 rounded-3xl my-1.5 py-1.5 cursor-pointer ${page === "Resume" ? "bg-newGreen" : ""}`}
                                onClick={() => changeNavbar("Resume")}
                            >
                                Resume
                            </Link>
                            <HashLink
                                to="#achievements"
                                smooth
                                className={`px-6 rounded-3xl my-1.5 py-1.5 cursor-pointer ${page === "Achievements" ? "bg-newGreen" : ""}`}
                                onClick={() => changeNavbar("Achievements")}
                            >
                                Achievements
                            </HashLink>
                            <HashLink
                                to="#projects"
                                smooth
                                className={`px-6 rounded-3xl my-1.5 py-1.5 cursor-pointer ${page === "Projects" ? "bg-newGreen" : ""}`}
                                onClick={() => changeNavbar("Projects")}
                            >
                                Projects
                            </HashLink>
                            <HashLink
                                to="#contact"
                                smooth
                                className={`px-6 rounded-3xl my-1.5 py-1.5 cursor-pointer ${page === "Contact" ? "bg-newGreen" : ""}`}
                                onClick={() => changeNavbar("Contact")}
                            >
                                Contact
                            </HashLink>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
