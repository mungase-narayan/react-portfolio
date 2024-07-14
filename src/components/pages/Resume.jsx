import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaCode } from "react-icons/fa";
import { Button } from "antd";
import { IoDocument } from "react-icons/io5";

const Resume = () => {
    return (
        <div className="py-32">
            <div class="max-w-4xl border mx-auto p-6 bg-card text-card-foreground dark:bg-zinc-900 dark:text-white rounded-lg shadow-lg">
                <header class="text-center mb-8">
                    <h1 class="text-4xl font-mono font-bold">
                        Narayan Mungase
                    </h1>
                    <p class=" text-lg">Pune, Maharashtra</p>
                    <div class="flex justify-center space-x-4 mt-2">
                        <a class="flex items-center space-x-2 ">
                            <FaPhoneAlt />
                            <span>+91 7841895308</span>
                        </a>
                        <a class="flex items-center space-x-2">
                            <IoMail />
                            <span>mungase.narayan@gmail.com</span>
                        </a>
                        <a class="flex items-center space-x-2">
                            <FaLinkedin />
                            <span>
                                linkedin.com/in/narayan-mungase-54aa29284/
                            </span>
                        </a>
                    </div>
                </header>
                <section class="mb-8">
                    <h2 class="text-2xl font-semibold border-b border-muted pb-1">
                        Education
                    </h2>
                    <div class="mt-4">
                        <p class="font-semibold items-center flex space-x-2">
                            <FaRegStar />
                            <h1>
                                MIT College of Railway Engineering and Research,
                                Barshi
                            </h1>
                        </p>
                        <p className=" ml-6">
                            Bachelor of Technology in Electronics and
                            Telecommunications (CGPA of 9.50)
                        </p>
                        <p class="text-muted-foreground ml-6">
                            August 2019 - June 2023 | Pune, India
                        </p>
                    </div>
                </section>
                <section class="mb-8">
                    <h2 class="text-2xl font-semibold border-b border-muted pb-1">
                        Projects
                    </h2>
                    <div class="mt-4">
                        <div class="mb-10">
                            <div className=" items-center flex justify-between">
                                <div>
                                    <p class="font-semibold items-center flex space-x-2">
                                        <FaRegStar />
                                        <h1>
                                            LC Solutions | Blog application for
                                            LeetCode problem solutions
                                        </h1>
                                    </p>
                                    <p className=" ml-6 text-sm">
                                        Typescript, Next.JS, Tailwind CSS, MDX,
                                        Algorithms, Blogs
                                    </p>
                                </div>
                                <div>
                                    <p class="text-muted-foreground">
                                        Feb 2024 – Present |{" "}
                                        <a
                                            href="#"
                                            class="text-blue-300 hover:underline"
                                        >
                                            Live Demo
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <ul class=" mt-3">
                                <li className="flex items-center space-x-4">
                                    <GoDotFill className="h-5 w-5" />
                                    <h1>
                                        Implementing blogs applications to solve
                                        coder's problems requires in-depth
                                        algorithm explanations, logic,
                                        intuitions, complexity analysis, and
                                        different approaches to solving
                                        problems.
                                    </h1>
                                </li>
                            </ul>
                        </div>
                        <div class="mb-10">
                            <div className="items-center flex justify-between">
                                <div>
                                    <p class="font-semibold space-x-2 flex items-center">
                                        <FaRegStar />
                                        <h1>
                                            Kico Ui | Pre-designed components
                                            and pages | Open Source
                                        </h1>
                                    </p>
                                    <p className="ml-6 text-sm">
                                        Typescript, Next.js, TailwindCSS, Mdx
                                    </p>
                                </div>
                                <p class="text-muted-foreground">
                                    Jan 2024 – Present |{" "}
                                    <a
                                        href="#"
                                        class="text-blue-300 hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                </p>
                            </div>
                            <ul class=" mt-3 ">
                                <li className="flex items-center space-x-3">
                                    <GoDotFill className="h-4 w-4" />
                                    <h1>
                                        It makes web development easy and the
                                        user experience better. Build
                                        high-quality UI components that are
                                        fully responsive and well-designed using
                                        KICO UI.
                                    </h1>
                                </li>
                                <li className="flex items-center space-x-3 mt-2">
                                    <GoDotFill className=" h-5 w-5" />
                                    <h1>
                                        Build beautifully designed components
                                        and pages that you can copy and paste
                                        into your apps. It's a collection of
                                        components and pages implemented using
                                        Shadcnui, Tailwind CSS, Ant-Design, and
                                        CSS.
                                    </h1>
                                </li>
                                <li className="flex items-center space-x-3 mt-2">
                                    <GoDotFill className=" h-5 w-5" />
                                    <h1>
                                        Implemented a traditional CMS-separated
                                        content from code approach using the
                                        next-contentlayer. So far, written
                                        28000+ lines of code using Next.js and
                                        contentlayer for the MDX content
                                        processor.
                                    </h1>
                                </li>
                            </ul>
                        </div>
                        <div class="mb-4">
                            <div className=" items-center justify-between flex">
                                <div>
                                    <p class="font-semibold space-x-2 flex items-center">
                                        <FaRegStar />
                                        <h1>
                                            Fudo | Food delivery application
                                        </h1>
                                    </p>
                                    <p className="ml-6 text-sm">
                                        Typescript, Next.js, React.js, Node.js,
                                        MongoDB, PostgreSQL, TailwindCSS, Redux,
                                        Docker
                                    </p>
                                </div>
                                <p class="text-muted-foreground">
                                    Jan 2024 – Present |{" "}
                                    <a
                                        href="#"
                                        class="text-blue-300 hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                </p>
                            </div>
                            <ul class="list-disc list-inside">
                                <li className="flex items-center space-x-3 mt-2">
                                    <GoDotFill className=" h-4 w-4" />
                                    <h1>
                                        Building a scalable, modular approach to
                                        enhancing modern food delivery
                                        applications with token-based
                                        authentication for secure access to
                                        sections and services.
                                    </h1>
                                </li>
                                <li className="flex items-center space-x-3 mt-2">
                                    <GoDotFill className=" h-3 w-3" />
                                    <h1>
                                        Wrote automated testing for faster
                                        development cycles and fewer bugs.
                                    </h1>
                                </li>
                                <li className="flex items-center space-x-3 mt-2">
                                    <GoDotFill className=" h-3 w-3" />
                                    <h1>
                                        Seamlessly integrate payment gateways to
                                        facilitate secure and efficient online
                                        transactions within applications.
                                    </h1>
                                </li>
                                <li className="flex items-center space-x-3 mt-2">
                                    <GoDotFill className=" h-6 w-6" />
                                    <h1 className="">
                                        Facilitate consistent and efficient
                                        application deployment across diverse
                                        environments using Docker
                                        containerization, and optimize data
                                        organization and retrieval through
                                        effective database design for improved
                                        application performance.
                                    </h1>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section class="mb-8">
                    <h2 class="text-2xl font-semibold border-b border-muted pb-1">
                        Experience
                    </h2>
                    <div class="mt-4">
                        <div className="items-center justify-between flex">
                            <div>
                                <p class="font-semibold space-x-2 flex items-center">
                                    <FaRegStar />
                                    <h1 className="">
                                        WorqHat | Full Stack Developer Intern
                                    </h1>
                                </p>
                                <p className="ml-6 text-sm">
                                    JavaScript, Node.js, Express.js, EJS,
                                    Firebase, TailwindCSS
                                </p>
                            </div>
                            <p class="text-muted-foreground">
                                Feb 2020 – June 2020 | Pune, India
                            </p>
                        </div>
                        <ul class="list-disc list-inside">
                            <li className="flex items-center space-x-3 mt-2">
                                <GoDotFill className=" h-4 w-4" />
                                <h1>
                                    Successfully implemented workflow automation
                                    processes, reducing manual intervention and
                                    significantly improving overall
                                    productivity.
                                </h1>
                            </li>
                            <li className="flex items-center space-x-3 mt-2">
                                <GoDotFill className=" h-4 w-4" />
                                <h1>
                                    Build a comprehensive system for debugging,
                                    testing and filtering workflows and API
                                    requests, and identifying issues before
                                    deployment.
                                </h1>
                            </li>
                            <li className="flex items-center space-x-3 mt-2">
                                <GoDotFill className=" h-5 w-5" />
                                <h1>
                                    Designed and built intuitive drag-and-drop
                                    controls and action elements, providing
                                    users with a user-friendly interface for
                                    automating workflows and API requests.
                                </h1>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="mb-8">
                    <h2 class="text-2xl font-semibold border-b border-muted pb-1">
                        Achievements
                    </h2>
                    <div class="mt-4">
                        <ul class="list-disc list-inside">
                            <li className="flex items-center space-x-3 mt-2">
                                <GoDotFill className=" h-6 w-6" />
                                <h1>
                                    Achieved the highest rating of 2100+ on
                                    LeetCode, positioning within the top 2% of
                                    participants on the platform globally,
                                    showcasing proficiency and excellence in
                                    problem-solving within the programming
                                    community.
                                </h1>
                            </li>
                            <li className="flex items-center space-x-3 mt-2">
                                <GoDotFill className=" h-3 w-3" />
                                <h1>
                                    Successful resolution of 1500+ challenges on
                                    multiple coding platforms.
                                </h1>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="mb-8">
                    <h2 class="text-2xl font-semibold border-b border-muted pb-1">
                        Coding Profiles
                    </h2>
                    <div class="mt-4 flex items-center space-x-6">
                        <p>
                            <a
                                href=""
                                className="font-semibold space-x-2 flex text-blue-300 items-center"
                            >
                                <FaCode />
                                <a href="https://leetcode.com/u/narayan_mungase/">
                                    LeetCode
                                </a>
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.codechef.com/users/mungase_1811"
                                className="font-semibold space-x-2 flex text-blue-300 items-center"
                            >
                                <FaCode />
                                <h1>CodeChef</h1>
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://codeforces.com/profile/mungase_1811"
                                className="font-semibold space-x-2 flex text-blue-300 items-center"
                            >
                                <FaCode />
                                <h1>CodeForces</h1>
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.geeksforgeeks.org/user/narayan_mungase/"
                                className="font-semibold space-x-2 flex text-blue-300 items-center"
                            >
                                <FaCode />
                                <h1>GeeksForGeeks</h1>
                            </a>
                        </p>
                    </div>
                </section>
                <section class="mb-8">
                    <h2 class="text-2xl font-semibold border-b border-muted pb-1">
                        Technical Skills
                    </h2>
                    <div class="mt-4">
                        <p>
                            <span class="font-semibold">Languages :</span> C++,
                            Javascript, Typescript, Node.js, HTML, CSS
                        </p>
                        <p>
                            <span class="font-semibold">Frameworks :</span>{" "}
                            React.js, Next.js, React Native, Redux, TailwindCSS
                        </p>
                        <p>
                            <span class="font-semibold">Database :</span>{" "}
                            MongoDB, PostgreSQL, Firebase
                        </p>
                        <p>
                            <span class="font-semibold">Technologies :</span>{" "}
                            Docker, GitHub, Git
                        </p>
                    </div>
                </section>
                <Button>Download Resume <IoDocument/></Button>
            </div>
        </div>
    );
};

export default Resume;
