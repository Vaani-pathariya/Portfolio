import React, { useState } from "react";
import lineup from "../assets/lineup.jpg";
import flatify from "../assets/flatify.png";
import sehat from "../assets/sehat.png";
import sih from "../assets/pgrkam.png";
import therapypal from "../assets/therapypal.png";
import sendwave from "../assets/sendwave.png";
import islife from "../assets/islife.png";
import Project from "../components/Project";

const Projects = () => {
    const [project, setProject] = useState("lineup");
    const [menuOpen, setMenuOpen] = useState(false);

    const changeProject = (value) => {
        setProject(value);
        setMenuOpen(false); // Close the menu when a project is selected
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="mx-12 mt-20" id="projects">
            <div className="w-max relative mx-auto">
                <div className="h-10 bg-newGreen rounded-xl w-full absolute ml-2 mt-2 z-0"></div>
                <div className="border border-white w-fit rounded-xl px-4 py-1 bg-lightBlack h-10 z-10 relative text-lg">
                    PROJECTS
                </div>
            </div>
            <div className="w-full mt-10 rounded-sm">
                {/* Hamburger menu for small screens */}
                <div className="lg:hidden flex justify-between items-center">
                    <button 
                        onClick={toggleMenu} 
                        className="text-lg text-white focus:outline-none"
                    >
                        ☰
                    </button>
                </div>

                {/* Menu items for small screens */}
                {menuOpen && (
                    <div className="lg:hidden bg-lightBlack border-t border-gray-700 mt-2">
                        <div 
                            className={`px-4 py-2 cursor-pointer ${project === 'lineup' ? 'bg-newGreen' : 'hover:bg-gray-800'}`} 
                            onClick={() => changeProject("lineup")}
                        >
                            Lineup
                        </div>
                        <div 
                            className={`px-4 py-2 cursor-pointer ${project === 'flatify' ? 'bg-newGreen' : 'hover:bg-gray-800'}`} 
                            onClick={() => changeProject("flatify")}
                        >
                            Flatify
                        </div>
                        <div 
                            className={`px-4 py-2 cursor-pointer ${project === 'sehat' ? 'bg-newGreen' : 'hover:bg-gray-800'}`} 
                            onClick={() => changeProject("sehat")}
                        >
                            Sehat
                        </div>
                        <div 
                            className={`px-4 py-2 cursor-pointer ${project === 'PGRKAM' ? 'bg-newGreen' : 'hover:bg-gray-800'}`} 
                            onClick={() => changeProject("PGRKAM")}
                        >
                            SIH 2023: PGRKAM
                        </div>
                        <div 
                            className={`px-4 py-2 cursor-pointer ${project === 'Therapy' ? 'bg-newGreen' : 'hover:bg-gray-800'}`} 
                            onClick={() => changeProject("Therapy")}
                        >
                            Therapy Pal
                        </div>
                        <div 
                            className={`px-4 py-2 cursor-pointer ${project === 'Sendwave' ? 'bg-newGreen' : 'hover:bg-gray-800'}`} 
                            onClick={() => changeProject("Sendwave")}
                        >
                            Send Wave
                        </div>
                        <div 
                            className={`px-4 py-2 cursor-pointer ${project === 'ISLife' ? 'bg-newGreen' : 'hover:bg-gray-800'}`} 
                            onClick={() => changeProject("ISLife")}
                        >
                            ISLife
                        </div>
                    </div>
                )}

                {/* Tabs for larger screens */}
                <div className="hidden lg:flex text-lg mt-2">
                    <div 
                        className={`${project === 'lineup' ? 'bg-newGreen' : 'bg-lightBlack border'} lg:px-8 px-1 mr-3 rounded-lg py-1 cursor-pointer text-center`} 
                        onClick={() => changeProject("lineup")}
                    >
                        Lineup
                    </div>
                    <div 
                        className={`${project === 'flatify' ? 'bg-newGreen' : 'bg-lightBlack border'} lg:px-8 px-1 mr-3 rounded-lg py-1 cursor-pointer text-center`} 
                        onClick={() => changeProject("flatify")}
                    >
                        Flatify
                    </div>
                    <div 
                        className={`${project === 'sehat' ? 'bg-newGreen' : 'bg-lightBlack border'} lg:px-8 px-1 mr-3 rounded-lg py-1 cursor-pointer text-center`} 
                        onClick={() => changeProject("sehat")}
                    >
                        Sehat
                    </div>
                    <div 
                        className={`${project === 'PGRKAM' ? 'bg-newGreen' : 'bg-lightBlack border'} lg:px-8 px-1 mr-3 rounded-lg py-1 cursor-pointer text-center`} 
                        onClick={() => changeProject("PGRKAM")}
                    >
                        SIH 2023: PGRKAM
                    </div>
                    <div 
                        className={`${project === 'Therapy' ? 'bg-newGreen' : 'bg-lightBlack border'} lg:px-8 px-1 mr-3 rounded-lg py-1 cursor-pointer text-center`} 
                        onClick={() => changeProject("Therapy")}
                    >
                        Therapy Pal
                    </div>
                    <div 
                        className={`${project === 'Sendwave' ? 'bg-newGreen' : 'bg-lightBlack border'} lg:px-8 px-1 mr-3 rounded-lg py-1 cursor-pointer text-center`} 
                        onClick={() => changeProject("Sendwave")}
                    >
                        Send Wave
                    </div>
                    <div 
                        className={`${project === 'ISLife' ? 'bg-newGreen' : 'bg-lightBlack border'} lg:px-8 px-1 mr-3 rounded-lg py-1 cursor-pointer text-center`} 
                        onClick={() => changeProject("ISLife")}
                    >
                        ISLife
                    </div>
                </div>

                {/* Project Details */}
                <div className="mt-4 border border-newGreen rounded-lg p-4">
                    {project === 'lineup' && <Project
                        title="LINEUP"
                        description="Implemented location-based distance and direction approximations for real-time player tracking in the ”Lineup” game, facilitating scanning of QR codes to compete for victory. Played by 100 players at a time during ZEALICON (college fest), with 600 registrations"
                        tech="Node.js , MongoDB , Socket.io , Express.js"
                        img={lineup}
                        links={[{ name: "Github", url: "https://github.com/VAANI-PATHARIYA/LINEUP-BACKEND" }]}
                    />}
                    {project === 'flatify' && <Project
                        title="FLATIFY"
                        description="Developed backend for a college flatmate and flat-finding app. Integrated Socket.IO for real-time chatting and implemented OTP email authentication. Added authentication via Google. Flatify: Your Ultimate Student Housing Companion. Seamlessly connect with potential flatmates, explore hostel flats, and simplify your accommodation search. With real-time messaging and a swipe-right approach to find your perfect match, embark on a stress-free journey to your ideal living space."
                        tech="Node.js , Google Authentication , MongoDB , Socket.io, Real time messaging"
                        img={flatify}
                        links={[{ name: "Github", url: "https://github.com/VAANI-PATHARIYA/FLATMATE-BACKEND" }]}
                    />}
                    {project === 'sehat' && <Project
                        title="SEHAT"
                        description="Developed backend for a healthcare kiosk based software serving 65-70% of India’s population, integrating image/audio storage and ML models. Sehat is a transformative Windows software that leverages Machine Learning, React, Vite, Firebase, and Python to connect remote communities with healthcare facilities. It breaks down geographical barriers, enhancing healthcare access and inclusivity, making a profound impact on rural healthcare in India."
                        tech="React , Vite , Firebase , Python , Machine Learning , Twilio Api integration , Flask"
                        img={sehat}
                        links={[{ name: "Video", url: "https://www.youtube.com/watch?v=9Ly4HAgdQnQ" }, { name: "Github", url: "https://github.com/Vaani-pathariya/SIH2023-SEHAT" }]}
                    />}
                    {project === 'PGRKAM' && <Project
                        title="PGRKAM"
                        description="Developed analytics and recommendation system for Punjab government job portal PGRKAM."
                        tech="React , Vite , Firebase ,Flask ,Python , Machine Learning"
                        img={sih}
                        links={[{ name: "Frontend Github", url: "https://github.com/Vaani-pathariya/pgkramfrontend" }, { name: "Backend Github", url: "https://github.com/Vaani-pathariya/PGRKAM-backend-public" }]}
                    />}
                    {project === 'Therapy' && <Project
                        title="THERAPY PAL"
                        description="TherapyPal is a mental health app designed to bridge the gap between users and therapists, offering personalized care with a wide range of services and easy access to experts. It's built to address the growing mental health crisis and its impact on mental health. By seamlessly integrating Machine Learning, Firebase, Android, Python, and React, we've created a dynamic and comprehensive solution that guides individuals towards the care they need. With this unique blend of technology and empathy, we're committed to revolutionizing the way mental health support is delivered, making it accessible, personalized, and effective."
                        tech="React, Python, Machine Learning, OpenCV, Scikit Learn, Android, Kotlin"
                        img={therapypal}
                        links={[{ name: "Github", url: "https://github.com/Vaani-pathariya/Trident" }]}
                    />}
                    {project === 'Sendwave' && <Project
                        title="SENDWAVE"
                        description="Send real-time email notifications to over 10,000 customers using queue-based processing."
                        tech="Node.js , BullMQ, Docker, Docker Compose"
                        img={sendwave}
                        links={[{ name: "Github", url: "https://github.com/SEND-WAVE/BACKEND" }]}
                    />}
                    {project === 'ISLife' && <Project
                        title="ISLIFE"
                        description="ISLife is a groundbreaking project addressing the communication challenges faced by Indian Sign Language (ISL) users. It offers real-time conversion of spoken language to ISL, fostering seamless communication between ISL and non-ISL users. With a user-friendly mobile app (in development phase) and web platform, ISLife ensures easy access to its services, promoting inclusivity and recognition of ISL in society."
                        tech="React, Python, Machine Learning, OpenCV, Scikit Learn"
                        img={islife}
                        links={[{ name: "Github", url: "https://github.com/Vaani-pathariya/ASL-Project-SSFT" }]}
                    />}
                </div>
            </div>
        </div>
    );
};

export default Projects;
