import React from "react";
import { Link } from "react-router-dom";
const Achievement=(props)=>{
    return(
        <div className="flex justify-between z-10 relative">
                <div className=" bg-newGreen rounded-3xl border-4 border-white  mr-5 mt-5" style={{width:"50px", height:'40px'}}></div>
                <div className="w-full ">
                    <div className="text-gray-400 italic">{props.duration}</div>
                    <div className="text-3xl text-newGreen">{props.Achievement}
                    </div>
                    <div className="text-gray-400">{props.desc}</div>
                    <div className="mt-3 flex">
                    {props.links.map((link) => (
                        <Link to={link.url} target="_blank">
                            <button className="bg-newGreen text-lg px-5 rounded-full text-black mr-3 italic">{link.name}</button>
                        </Link>
                ))}
                    </div>
                </div>
                <img src={props.img} className="w-3/12 rounded-2xl py-2"></img>
                </div>
    )
}
export default Achievement