import React, { useState } from "react";
import comp from "../assets/aica health (2).svg"
const Projects = ()=>{
    const [project,setProject] =useState("hi");
    const changeProject = (value) => {
        setProject(value);
    };
    return(
        <div className="mx-12 mt-20">
            <div className="w-max relative mx-auto">
                <div className="h-10 bg-newGreen rounded-xl w-full absolute ml-2 mt-2 z-0"></div>
                <div className="border border-white w-fit rounded-xl px-4 py-1 bg-lightBlack h-10 z-10 relative text-lg">
                    PROJECTS
                </div>
            </div>
            <div className="w-full mt-10 rounded-sm">
                <div className="flex  text-lg ">
                    <div className={`${project=='hi'?'bg-newGreen':'bg-lightBlack border' } px-10 mr-3 rounded-lg py-1 cursor-pointer`} onClick={()=>changeProject("hi")}>Hi</div>
                    <div className={`${project=='title'?'bg-newGreen':'bg-lightBlack border' } px-10 mr-3 rounded-lg py-1 cursor-pointer`} onClick={()=>changeProject("title")}>Hi</div>
                    
                </div>
                <div className=" mt-4 border border-newGreen rounded-lg p-4">
                    <div className="flex">
                        <img src={comp} className="w-4/12 rounded-md"></img>
                        <div className="ml-4">
                            <div className="font-semibold text-3xl">TITLE</div>
                            <div className="text-lg">description</div>
                            <div className="flex my-2">
                                <button className=" bg-newGreen text-lg px-5 rounded-full text-black mr-3 italic">Link</button>
                                <button className=" bg-newGreen text-lg px-5 rounded-full text-black mr-3 italic">Link</button>
                            </div>
                            <div className="text-lg"><span className="italic">Technologies Used: </span> hey</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects