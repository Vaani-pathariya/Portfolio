import React from "react";
const Company = (props)=>{
    return(
        <div className="flex bg-lightBlack mt-10 rounded-sm">
                <img src={props.img} className="w-48 m-5"></img>
                <div className="mt-5 mr-5 w-full">
                    <div className="font-semibold text-lg text-newGreen lg:flex justify-between "><div>{props.companyName}</div>
                        <div className=" italic">{props.duration}</div>
                    </div>
                    <div className="mb-5">{props.content}</div></div>
        </div>
    )
}
export default Company;