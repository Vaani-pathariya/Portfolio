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
            <Company img={gopillz} companyName="AICA HEALTH (aka Gopillz Ai)" content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et sed sint inventore dolorem mollitia amet ab veniam perspiciatis, modi dignissimos obcaecati incidunt ex tempore repudiandae animi! Delectus, alias tenetur.' duration='March 2024 - Present' />
            <Company img={gdsc} companyName="AICA HEALTH (aka Gopillz Ai)" content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et sed sint inventore dolorem mollitia amet ab veniam perspiciatis, modi dignissimos obcaecati incidunt ex tempore repudiandae animi! Delectus, alias tenetur.' duration='March 2024 - Present' />
            <Company img={microsoft} companyName="AICA HEALTH (aka Gopillz Ai)" content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et sed sint inventore dolorem mollitia amet ab veniam perspiciatis, modi dignissimos obcaecati incidunt ex tempore repudiandae animi! Delectus, alias tenetur.' duration='March 2024 - Present' />
            <Company img={edc} companyName="AICA HEALTH (aka Gopillz Ai)" content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et sed sint inventore dolorem mollitia amet ab veniam perspiciatis, modi dignissimos obcaecati incidunt ex tempore repudiandae animi! Delectus, alias tenetur.' duration='March 2024 - Present' />
            <Company img={impetus} companyName="AICA HEALTH (aka Gopillz Ai)" content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et sed sint inventore dolorem mollitia amet ab veniam perspiciatis, modi dignissimos obcaecati incidunt ex tempore repudiandae animi! Delectus, alias tenetur.' duration='March 2024 - Present' />

        </div>
    )
}
export default Experience;