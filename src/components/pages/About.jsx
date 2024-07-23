import React from "react";
// import Informations from "../informations";
// import Services from "../Services";
// import SkillsAndEdu from "../SkillsAndEdu";
// import AvatarContext from "antd/es/avatar/AvatarContext";
// import { Avatar } from "antd";

const About = () => {
    return (
        <div className=" mt-28 px-24 py-4">
            <div class="relative">
                
                <div class="absolute border-muted-foreground h-full left-1/2">
                <div className="mt-10 mb-1 h-3 w-3 rounded-full bg-green-600"></div>
                <div className=" h-12 border border-black rounded-full"></div>
                <div className=" mb-1 mt-1 h-3 w-3 rounded-full bg-orange-600"></div>
                <div className=" h-10 border border-black rounded-full"></div>
                <div className=" mb-1 mt-1 h-3 w-3 rounded-full bg-purple-600"></div>
                <div className=" h-10 border border-black rounded-full"></div>
                <div className=" mb-1 mt-1 h-3 w-3 rounded-full bg-pink-600"></div>
                <div className=" h-10 border border-black rounded-full"></div>
                <div className=" mb-1 mt-1 h-3 w-3 rounded-full bg-yellow-500"></div></div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className=" space-y-10">
                        <div class="bg-card bg-green-200 hover:bg-green-300 duration-200 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div class="flex items-center">
                                <div class="bg-green-500 w-3 h-3 rounded-full mr-2"></div>
                                <span class="font-bold">2014-2015</span>
                            </div>
                            <h3 class="font-semibold">
                                Senior Javascript Developer
                            </h3>
                            <p class="text-muted-foreground">
                                Lorem ipsum dolor sit amet, sed diam nonummy
                                eirmod tempor invidunt.
                            </p>
                        </div>

                        <div class="bg-card px-4 bg-purple-200 hover:bg-purple-300 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <div class="flex items-center">
                                <div class="bg-purple-600 w-3 h-3 rounded-full mr-2"></div>
                                <span class="font-bold">2014-2015</span>
                            </div>
                            <h3 class="font-semibold">
                                Senior WordPress Developer
                            </h3>
                            <p class="text-muted-foreground">
                                Lorem ipsum dolor sit amet, sed diam nonummy
                                eirmod tempor invidunt.
                            </p>
                        </div>

                        <div class="bg-card px-4 bg-yellow-200 hover:bg-yellow-300 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <div class="flex items-center">
                                <div class="bg-yellow-600 w-3 h-3 rounded-full mr-2"></div>
                                <span class="font-bold">2014-2015</span>
                            </div>
                            <h3 class="font-semibold">
                                Senior WordPress Developer
                            </h3>
                            <p class="text-muted-foreground">
                                Lorem ipsum dolor sit amet, sed diam nonummy
                                eirmod tempor invidunt.
                            </p>
                        </div>
                    </div>
                    <div className=" space-y-10">
                        <div class="bg-card mt-16 px-4 bg-orange-200 hover:bg-orange-300 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <div class="flex items-center">
                                <div class="bg-orange-600 w-3 h-3 rounded-full mr-2"></div>
                                <span class="font-bold">2014-2015</span>
                            </div>
                            <h3 class="font-semibold">
                                Senior WordPress Developer
                            </h3>
                            <p class="text-muted-foreground">
                                Lorem ipsum dolor sit amet, sed diam nonummy
                                eirmod tempor invidunt.
                            </p>
                        </div>

                        <div class="bg-card px-4 py-2 bg-pink-200 hover:bg-pink-300 duration-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div class="flex items-center">
                                <div class="bg-pink-600 w-3 h-3 rounded-full mr-2"></div>
                                <span class="font-bold">2017-2018</span>
                            </div>
                            <h3 class="font-semibold">
                                Freelancer And Themeforest
                            </h3>
                            <p class="text-muted-foreground">
                                Lorem ipsum dolor sit amet, sed diam nonummy
                                eirmod tempor invidunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
