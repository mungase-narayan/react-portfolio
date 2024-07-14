import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdDownloading } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { Button } from "antd";

const Home = () => {
    return (
        <div class="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
            <div class="container mx-auto flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 text-center md:text-left px-11">
                    <div className="flex space-x-2">
                        <h1 class="text-4xl md:text-5xl items-center justify-center font-bold  mt-2">
                            Hello👋,  I'm
                        </h1>
                        <span className="text-4xl md:text-5xl text-blue-300 font-bold mt-2">
                            Narayan
                        </span>
                    </div>
                    <div className=" text-2xl mt-1">
                        <span className="">I am a </span>
                        <TypeAnimation
                            sequence={[
                                "Full-Stack Developer",
                                2000,
                                "Ui/Ux Designer",
                                2000,
                                "Youtuber",
                                2000,
                            ]}
                            speed={50}
                            className="text-blue-300"
                            wrapper="span"
                            repeat={Infinity}
                        />
                    </div>
                    <p class="mt-3">
                        Brief description with insights into myself, I am an enthusiastic and dedicated individual with a strong foundation in Data Structures and Algorithms (DSA) using C++. My journey through the realm of DSA has equipped me with a profound understanding of essential concepts, enabling me to tackle complex problems with efficiency and precision. My technical knowledge extends beyond DSA, encompassing various programming paradigms and software development practices, making me a versatile and adaptive problem solver.
                    </p>
                    <div class="mt-6 flex justify-center md:justify-start space-x-4">
                        <Button onClick={"/contact"} className=" shadow-lg">Contact Me < CiLocationArrow1/></Button>
                        <Button className=" shadow-lg">Download CV <MdDownloading/></Button>
                    </div>
                    <div class="mt-8 flex justify-center md:justify-start space-x-6">
                        <a
                            href="https://www.linkedin.com/in/narayan-mungase-54aa29284/"
                            class=" hover:text-foreground transform transition-transform duration-300 hover:scale-110"
                        >
                            <BsLinkedin />
                        </a>
                        <a
                            href="https://twitter.com/Narayan1811"
                            class="hover:text-foreground transform transition-transform duration-300 hover:scale-110"
                        >
                            < BsTwitter />
                        </a>
                        <a
                            href="https://www.youtube.com/@codemitrayt"
                            class="hover:text-foreground transform transition-transform duration-300 hover:scale-110"
                        >
                            <BsYoutube />
                        </a>
                        <a
                            href="https://github.com/mungase-narayan"
                            class="hover:text-foreground transform transition-transform duration-300 hover:scale-110"
                        >
                            <BsGithub />
                        </a>
                        <a
                            href="https://m.facebook.com/profile.php?id=61550695312101"
                            class="hover:text-foreground transform transition-transform duration-300 hover:scale-110"
                        >
                            <BsFacebook />
                        </a>
                        <a
                            href="https://www.instagram.com/narayan_mungase_1811/"
                            class="hover:text-foreground transform transition-transform duration-300 hover:scale-110"
                        >
                            <BsInstagram />
                        </a>
                    </div>
                </div>
                <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <div class="relative">
                        <div className="bg-[url('/photos/shape-dark.png')] bg-cover">
                             <img
                                src="/photos/Narayan4.jpg"
                                className="h-[350px] w-[350px] rounded-full right-0"
                                alt="Profile Picture"
                                class="rounded-full shadow-lg"
                            />
                        </div>
                        <div class=" flex space-x-2 absolute top-10 left-0 transform items-center justify-center -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow shadow-slate-500">
                            <h1 className="ml-2 text-xl font-semibold">00 </h1>
                            <span className="text-sm">Years of Experience</span>
                        </div>
                        <div class="absolute flex items-center justify-center space-x-2 bottom-16 right-0  transform translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow shadow-slate-500">
                            <img src="" alt="" />
                            <h1 class="ml-2 text-xl font-semibold">9k</h1>
                            <span className="text-sm"> Happy Clients</span>
                        </div>
                        <div class="absolute flex items-center justify-center space-x-2 bottom-10 left-1 transform -translate-x-1/2 translate-y-1/2 bg-white p-2 rounded-lg shadow shadow-slate-500">
                            <img src="" alt="" />
                            <h1 class="ml-2 text-xl font-semibold">20 </h1>
                            <span className="text-sm">Finished Projects</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="items-center text-left justify-center flex space-x-28 mt-28">
                <div className="flex items-center text-left space-x-4">
                    <h1 className=" text-3xl font-extrabold">02</h1>
                    <div className=" flex flex-col">
                        <span className=" font-mono">Years of</span>
                        <span className="font-mono">Experience</span>
                    </div>
                    </div>
                <div className="flex items-center space-x-4">
                    <h1 className=" text-3xl font-extrabold">26</h1>
                    <div className=" flex flex-col">
                        <span className="font-mono">Projects</span>
                        <span className="font-mono">Completed</span>
                    </div>
                </div>
                
                <div className="flex items-center space-x-4">
                    <h1 className=" text-3xl font-extrabold">08</h1>
                    <div className=" flex flex-col">
                        <span className="font-mono">Technologies</span>
                        <span className="font-mono">Mastered</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <h1 className=" text-3xl font-extrabold">25</h1>
                    <div className=" flex flex-col">
                        <span className="font-mono">Code</span>
                        <span className="font-mono">Commits</span>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Home;
