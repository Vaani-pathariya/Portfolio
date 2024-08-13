import React from "react";
const Achievements=()=>{
    return(
        <div className="mx-12 mt-20 pb-10">
            <div className="w-max relative mx-auto mb-10">
                <div className="h-10 bg-newGreen rounded-xl w-full absolute ml-2 mt-2 z-0"></div>
                <div className="border border-white w-fit rounded-xl px-4 py-1 bg-lightBlack h-10 z-10 relative text-lg">
                    ACHIEVEMENTS & EVENTS
                </div>
            </div>
            {/* timeline */}
            <div className="relative ">
                <div className="h-full bg-white w-1 absolute ml-4 z-0"></div>
                <div className="flex justify-between z-10 relative">
                <div className=" bg-newGreen rounded-3xl border-4 border-white  mr-5 mt-5" style={{width:"40px", height:'40px'}}></div>
                <div className="w-full ">
                    <div className="text-gray-400 italic">duration</div>
                    <div className="text-3xl text-newGreen">Achievement
                    </div>
                    <div className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, sint! Amet asperiores, omnis sapiente quo incidunt perferendis consequuntur. Nihil sint expedita quia, dolorem tempora officiis quas commodi ducimus illum beatae!</div>
                    <div className="mt-3 flex">
                        <button className=" bg-newGreen text-lg px-5 rounded-full text-black mr-3 italic">Link</button>
                        <button className=" bg-newGreen text-lg px-5 rounded-full text-black mr-3 italic">Link</button>

                    </div>
                </div>
                </div>

                <div className="flex justify-between z-10 relative mt-16">
                <div className=" bg-newGreen rounded-3xl border-4 border-white  mr-5 mt-5" style={{width:"40px", height:'40px'}}></div>
                <div className="w-full ">
                    <div className="text-gray-400 italic">duration</div>
                    <div className="text-3xl text-newGreen">Achievement
                    </div>
                    <div className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, sint! Amet asperiores, omnis sapiente quo incidunt perferendis consequuntur. Nihil sint expedita quia, dolorem tempora officiis quas commodi ducimus illum beatae!</div>
                    <div className="mt-3 flex">
                        <button className=" bg-newGreen text-lg px-5 rounded-full text-black mr-3 italic">Link</button>
                        <button className=" bg-newGreen text-lg px-5 rounded-full text-black mr-3 italic">Link</button>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Achievements