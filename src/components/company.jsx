import React from "react";
const Company = (props)=>{
    return(
        <div className="flex bg-lightBlack mt-10 rounded-sm">
                <img src={props.img} className="h-24 m-5"></img>
                <div className="mt-5 mr-5">
                    <div className="font-semibold text-lg text-newGreen flex justify-between"><div>{props.companyName}</div>
                        <div className=" italic">{props.duration}</div>
                    </div>
                    <div>{props.content}</div></div>
        </div>
    )
}
export default Company;