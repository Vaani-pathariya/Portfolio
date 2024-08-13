import React from "react";
import comp1 from "../assets/aica health (2).svg"
import Company from "../components/company";
const Experience = ()=>{
    return(
        <div className="mx-12 mt-20">
            <div className="w-max relative mx-auto">
                <div className="h-10 bg-newGreen rounded-xl w-full absolute ml-2 mt-2 z-0"></div>
                <div className="border border-white w-fit rounded-xl px-4 py-1 bg-lightBlack h-10 z-10 relative text-lg">
                    EXPERIENCE
                </div>
            </div>
            <Company img={comp1} companyName="AICA HEALTH (aka Gopillz Ai)" content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et sed sint inventore dolorem mollitia amet ab veniam perspiciatis, modi dignissimos obcaecati incidunt ex tempore repudiandae animi! Delectus, alias tenetur.' duration='March 2024 - Present' />
        </div>
    )
}
export default Experience;