import React from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
    return (
        <div className="flex">
            <img src={props.img} className="w-4/12 rounded-md" alt={props.title} />
            <div className="ml-4">
                <div className="font-semibold text-3xl">{props.title}</div>
                <div className="text-lg">{props.description}</div>
                <div className="flex my-2">
                {props.links.map((link) => (
                        <Link to={link.url} target="_blank">
                            <button className="bg-newGreen text-lg px-5 rounded-full text-black mr-3 italic">{link.name}</button>
                        </Link>
                ))}
                </div>
                <div className="text-lg">
                    <span className="italic">Technologies Used: </span>{props.tech}
                </div>
            </div>
        </div>
    );
}

export default Project;
