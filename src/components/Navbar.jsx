import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [page, setPage] = useState("Home");

    const changeNavbar = (value) => {
        setPage(value);
    };

    return (
        <div className="pt-3 fixed w-full z-20">
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
                <Link to="https://drive.google.com/file/d/1YmCM9b67FlSv4KuRbsZHeHSdWlx5oS25/view?usp=sharing" target="_blank"
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
    );
};

export default Navbar;
