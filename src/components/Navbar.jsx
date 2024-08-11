import React, { useState } from "react";

const Navbar = () => {
    const [page, setPage] = useState("Home");

    const changeNavbar = (value) => {
        setPage(value);
    };

    return (
        <div className="pt-3 fixed w-full z-20">
        <div className="bg-lightBlack w-10/12 rounded-3xl mx-auto flex text-lg border border-gray-400">
            <div
                className={`px-6 rounded-3xl my-1.5 mx-2 py-1.5 cursor-pointer ${page === "Home" ? "bg-newGreen" : ""}`}
                onClick={() => changeNavbar("Home")}
            >
                Home
            </div>
            <div
                className={`px-6 rounded-3xl my-1.5 mx-auto py-1.5 cursor-pointer ${page === "Skills" ? "bg-newGreen" : ""}`}
                onClick={() => changeNavbar("Skills")}
            >
                Skills
            </div>
            <div
                className={`px-6 rounded-3xl my-1.5 mx-auto py-1.5 cursor-pointer ${page === "Experience" ? "bg-newGreen" : ""}`}
                onClick={() => changeNavbar("Experience")}
            >
                Experience
            </div>
            <div
                className={`px-6 rounded-3xl my-1.5 mx-auto py-1.5 cursor-pointer ${page === "Resume" ? "bg-newGreen" : ""}`}
                onClick={() => changeNavbar("Resume")}
            >
                Resume
            </div>
            <div
                className={`px-6 rounded-3xl my-1.5 mx-auto py-1.5 cursor-pointer ${page === "Achievements" ? "bg-newGreen" : ""}`}
                onClick={() => changeNavbar("Achievements")}
            >
                Achievements
            </div>
            <div
                className={`px-6 rounded-3xl my-1.5 mx-auto py-1.5 cursor-pointer ${page === "Projects" ? "bg-newGreen" : ""}`}
                onClick={() => changeNavbar("Projects")}
            >
                Projects
            </div>
            <div
                className={`px-6 rounded-3xl my-1.5 mx-2 py-1.5 cursor-pointer ${page === "Contact" ? "bg-newGreen" : ""}`}
                onClick={() => changeNavbar("Contact")}
            >
                Contact
            </div>
        </div>
        </div>
    );
};

export default Navbar;
