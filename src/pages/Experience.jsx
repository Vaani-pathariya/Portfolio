import React from "react";
import gopillz from "../assets/aica health (2).svg"
import edc from "../assets/edc.png"
import microsoft from "../assets/microsoft.png"
import gdsc from "../assets/gdsc.png"
import impetus from "../assets/impetus.png"
import Company from "../components/company";
const Experience = ()=>{
    return(
        <div className="mx-12 mt-20" id="experience">
            <div className="w-max relative mx-auto">
                <div className="h-10 bg-newGreen rounded-xl w-full absolute ml-2 mt-2 z-0"></div>
                <div className="border border-white w-fit rounded-xl px-4 py-1 bg-lightBlack h-10 z-10 relative text-lg">
                    EXPERIENCE
                </div>
            </div>
            <Company img={gopillz} companyName="AICA HEALTH (aka Gopillz Ai) - Full Stack Web Development Intern" content='Worked on the healthcare machine learning models. Worked on the frontend and backend of Smartpills' duration='March 2024 - Present' />
            <Company img={gdsc} companyName="Google Developers Student Club JSSATEN - Web Developer" content='Since my recruitment as a Web Developer at GDSC JSSATEN, Ive had the privilege of working on a diverse range of projects, each presenting unique challenges and opportunities for growth. These projects have encompassed full-stack web development, where Ive leveraged my expertise in technologies like React, Node.js, HTML, CSS, Javascript and more to create robust and user-friendly web applications. Collaboration has been at the heart of my experience at GDSC JSSATEN. Working closely with a talented and motivated team of developers, designers, and project managers, Ive had the chance to participate in every phase of the web development lifecycle. And deliver better projects.' duration='April 2023 - Present' />
            <Company img={microsoft} companyName="Alpha Microsoft Learn Student Ambassador" content='As a Microsoft Learn Student Ambassador, Ive had the incredible opportunity to be part of a dynamic community of passionate tech enthusiasts and learners. This role has allowed me to merge my love for technology with a strong desire to empower others through education and innovation.' duration='September 2023 - August 2024' />
            <Company img={edc} companyName="Entrepreneurship Development Cell JSSATEN - Technical Member" content='As a member of EDC, Ive had the privilege of participating in a wide range of activities that foster entrepreneurship and creativity. One of the core functions of our cell has been organizing workshops, seminars, and guest lectures. These events have not only expanded my knowledge but have also exposed me to real-world insights and strategies for launching and scaling businesses.' duration='November 2022 - December 2023' />
            <Company img={impetus} companyName="Impetus Student Society - Member" content='Got to experience and learn the essentials of speaking at MUNs, along with hosting JSS MUN in 2022' duration='December 2021 - April 2023' />

        </div>
    )
}
export default Experience;