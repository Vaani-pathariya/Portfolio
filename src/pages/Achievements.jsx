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
                
                <Achievement img={sih} duration="September 2023" Achievement="Smart India Hackathon 2023 Finalist" desc="Our team crafted a comprehensive and interactive data analytics dashboard, a cutting-edge recommender system, and an AI interview preparation platform—all within the intense confines of the hackathon for JOB seeking individuals. The platform was an extention to the job platform by the government of Punjab PGRKAM" links={[{ name: "Backend", url: "https://github.com/Vaani-pathariya/PGRKAM-backend-public" }, { name: "Frontend", url: "https://github.com/Vaani-pathariya/pgkramfrontend" }]} />
                <Achievement img={icc} duration="October 2023" Achievement="ICC Next In 2.0 Hackathon 2023 (Top 67 Worldwide)" desc="Out of a staggering 20,000 registrations, we made it to the top 67 teams worldwide ! It's an incredible feat and a testament to the dedication and skills of each member of my team. The selections were diverse and global, spanning countries like India, Pakistan, Canada, and beyond. " />
                <Achievement img={hacktoberfest} duration="October 2023" Achievement="Hacktoberfest 2023 Project Maintainer" desc="Maintained the repository for org : GDSC JSSATEN for Hacktoberfest 2023 participants" links={[{ name: "Repository", url: "https://github.com/DSC-JSS-NOIDA/Foss-events2.0" }]} />
                <Achievement img={session} duration="October 2023" Achievement="Gave a session on 'Chat GPT and creating your own LLM bot using Embedchains' at 'Explorations in AI' event held by GDSC JSSATEN in collaboration with GDG Gurugram" desc="Google Developer Student Clubs JSSATEN, in collaboration with GDG Gurugram, hosted an incredible event, Explorations with AI, that left everyone buzzing with inspiration! Unveiling the Power of Chat GPT and LLM Bots with Mem0 (YC S24): - In the first session, I had the privilege of sharing the stage with Ashish Kushwaha as we delved into the fascinating world of Chat GPT and demonstrated how to create your very own Large Language Model (LLM) bots using Embedchain. And I'm delighted to share that EmbedChain is a framework created by two of my college alumni, Taranjeet Singh sir and Deshraj Yadav sir. The insights shared were nothing short of mind-blowing!" />
                <Achievement img={news} duration="July 2023" Achievement="Got featured by Samsung India on Twitter and Samsung Newsroom for Samsung solve for Tomorrow Hackathon"  />
                <Achievement img={samsung} duration="July 2023" Achievement="Samsung Solve for Tomorrow (Season 2 Top 30 winner)" desc="Got selected among the Top 30 teams in Samsung's Solve for Tomorrow Hackathon from 70,000 applications. Got the opportunity to visit SRI Bangalore, SRI Noida, SDD Noida, SRI Delhi, and RHQ Gurugram. At the SRI locations, we engaged in various activities, attended informative sessions, talked to industry experts in various fields and immersed ourselves in the world of Samsung products." links={[{ name: "Experience", url: "https://www.linkedin.com/feed/update/urn:li:activity:7086292788467703808/" }]} />
                <Achievement img={trident} duration="December 2022" Achievement="Trident Hacks 2nd National Winner" desc="Created a project for assisting mental health therapy process." links={[{ name: "Certificate 1", url: "https://drive.google.com/file/d/186rsvB9_gapxNn2GsMkrM1cCazbtG2M-/view?usp=sharing" }, { name: "Certificate 2", url: "https://drive.google.com/file/d/1-AkbPjKXAmeAr7MbmB0Lc7WC0pnTGylU/view?usp=sharing" }]} />
                <Achievement img={tech} duration="2020" Achievement="Google Technovation Ideal Lab 2020 Participant"  />

            </div>
        </div>
    )
}
export default Achievements