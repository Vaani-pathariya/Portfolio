import React, { useState } from "react";
import lineup from "../assets/lineup.jpg"
import flatify from "../assets/flatify.png"
import sehat from "../assets/sehat.png"
import sih from "../assets/pgrkam.png"
import therapypal from "../assets/therapypal.png"
import sendwave from "../assets/sendwave.png"
import islife from "../assets/islife.png"
import Project from "../components/Project";
const Projects = () => {
    const [project, setProject] = useState("lineup");
    const changeProject = (value) => {
        setProject(value);
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
                <div className="flex  text-lg ">
                    <div className={`${project == 'lineup' ? 'bg-newGreen' : 'bg-lightBlack border'} px-8 mr-3 rounded-lg py-1 cursor-pointer`} onClick={() => changeProject("lineup")}>Lineup</div>
                    <div className={`${project == 'flatify' ? 'bg-newGreen' : 'bg-lightBlack border'} px-8 mr-3 rounded-lg py-1 cursor-pointer`} onClick={() => changeProject("flatify")}>Flatify</div>
                    <div className={`${project == 'sehat' ? 'bg-newGreen' : 'bg-lightBlack border'} px-8 mr-3 rounded-lg py-1 cursor-pointer`} onClick={() => changeProject("sehat")}>Sehat</div>
                    <div className={`${project == 'PGRKAM' ? 'bg-newGreen' : 'bg-lightBlack border'} px-8 mr-3 rounded-lg py-1 cursor-pointer`} onClick={() => changeProject("PGRKAM")}>SIH 2023: PGRKAM</div>
                    <div className={`${project == 'Therapy' ? 'bg-newGreen' : 'bg-lightBlack border'} px-8 mr-3 rounded-lg py-1 cursor-pointer`} onClick={() => changeProject("Therapy")}>Therapy Pal</div>
                    <div className={`${project == 'Sendwave' ? 'bg-newGreen' : 'bg-lightBlack border'} px-8 mr-3 rounded-lg py-1 cursor-pointer`} onClick={() => changeProject("Sendwave")}>Send Wave</div>
                    <div className={`${project == 'ISLife' ? 'bg-newGreen' : 'bg-lightBlack border'} px-8 mr-3 rounded-lg py-1 cursor-pointer`} onClick={() => changeProject("ISLife")}>ISLife</div>

                </div>
                <div className=" mt-4 border border-newGreen rounded-lg p-4">
                    {project=='lineup'&&<Project
                        title="TITLE"
                        description="desc"
                        tech="hey"
                        img={lineup}
                        links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]}
                    />}
                    {project=='flatify'&&<Project
                        title="TITLE"
                        description="desc"
                        tech="hey"
                        img={flatify}
                        links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]}
                    />}
                    {project=='sehat'&&<Project
                        title="TITLE"
                        description="desc"
                        tech="hey"
                        img={sehat}
                        links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]}
                    />}
                    {project=='PGRKAM'&&<Project
                        title="TITLE"
                        description="desc"
                        tech="hey"
                        img={sih}
                        links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]}
                    />}
                    {project=='Therapy'&&<Project
                        title="TITLE"
                        description="desc"
                        tech="hey"
                        img={therapypal}
                        links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]}
                    />}
                    {project=='Sendwave'&&<Project
                        title="TITLE"
                        description="desc"
                        tech="hey"
                        img={sendwave}
                        links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]}
                    />}
                    {project=='ISLife'&&<Project
                        title="TITLE"
                        description="desc"
                        tech="hey"
                        img={islife}
                        links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]}
                    />}
                </div>
            </div>
        </div>
    )
}
export default Projects