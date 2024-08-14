import React from "react";
import sih from "../assets/sih.webp"
import icc from "../assets/icc.png"
import hacktoberfest from "../assets/hacktoberfest.png"
import session from "../assets/llm.jpeg"
import news from "../assets/news.png"
import samsung from "../assets/ssft.png"
import trident from "../assets/trident.jpeg"
import tech from "../assets/googletech.png"
import Achievement from "../components/Achievement";
const Achievements = () => {
    return (
        <div className="mx-12 mt-20 pb-10" id="achievements">
            <div className="w-max relative mx-auto mb-10">
                <div className="h-10 bg-newGreen rounded-xl w-full absolute ml-2 mt-2 z-0"></div>
                <div className="border border-white w-fit rounded-xl px-4 py-1 bg-lightBlack h-10 z-10 relative text-lg">
                    ACHIEVEMENTS & EVENTS
                </div>
            </div>
            {/* timeline */}
            <div className="relative ">
                <div className="h-full bg-white w-1 absolute ml-5 z-0"></div>
                
                <Achievement img={sih} duration="duration" Achievement="Achievement" desc="lorem" links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]} />
                <Achievement img={icc} duration="duration" Achievement="Achievement" desc="lorem" links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]} />
                <Achievement img={hacktoberfest} duration="duration" Achievement="Achievement" desc="lorem" links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]} />
                <Achievement img={session} duration="duration" Achievement="Achievement" desc="lorem" links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]} />
                <Achievement img={news} duration="duration" Achievement="Achievement" desc="lorem" links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]} />
                <Achievement img={samsung} duration="duration" Achievement="Achievement" desc="lorem" links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]} />
                <Achievement img={trident} duration="duration" Achievement="Achievement" desc="lorem" links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]} />
                <Achievement img={tech} duration="duration" Achievement="Achievement" desc="lorem" links={[{ name: "hey", url: "/" }, { name: "hi", url: "/" }]} />

            </div>
        </div>
    )
}
export default Achievements