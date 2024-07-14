import React from "react";
import { Button } from "antd";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Input } from "@material-tailwind/react";


const Contacts = () => {
    return (
        <div>
            <div class="min-h-screen flex flex-col items-center justify-center pt-20 py-10">
                <h1 class="text-3xl font-bold font-mono text-center mb-4">
                    Get In Touch
                </h1>
                <p class="text-center text-muted-foreground px-72 mb-8">
                    We'll create high-quality linkable content and build at
                    least 40 high-authority links to each asset, paving the way
                    for you to grow your rankings, improve brand.
                </p>
                <div class="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full border border-neutral-200">
                    <div class="bg-primary text-primary-foreground p-8 md:w-1/3">
                        <h2 class="text-xl items-center font-mono font-semibold mb-4">
                            Contact Information
                        </h2>
                        <p class="mb-4">
                            We'll create high-quality linkable content and build
                            at least 40 high-authority.
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-center">
                            <MdOutlinePhone  className="mr-2"/>
                                <div>
                                    <p>+91 7841895308</p>
                                    <p>+91 7499487810</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                            <MdOutlineAlternateEmail className="mr-2"/>
                            <div>
                              <p>narayanmungase</p>
                              <p>03@gmail.com</p>
                            </div>
                            </div>
                            <div class="flex items-center">
                            <IoLocationOutline className="mr-2"/>
                                <p>Brashi, Solapur</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-8 md:w-2/3 ">
                        <form class="space-y-4 items-center">
                            <div class="flex flex-col md:flex-row md:space-x-4">
                                <div class="flex-1">
                                    <label
                                        for="name"
                                        class="block px-2 text-sm font-medium text-muted-foreground"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        class="mt-1 block w-full border border-input rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div class="flex-1">
                                    <label
                                        for="email"
                                        class="block px-2 text-sm font-medium text-muted-foreground"
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        class="mt-1 block w-full border border-input rounded-md shadow-sm p-2 invalid:border-pink-500 "
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    for="subject"
                                    class="block text-sm font-medium px-2 text-muted-foreground"
                                >
                                    Your Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    class="mt-1 block w-full border border-input rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label
                                    for="message"
                                    class="block text-sm font-medium px-2 text-muted-foreground"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    class="mt-1 block w-full border border-input rounded-md shadow-sm p-2"
                                    placeholder="Write here your message"
                                ></textarea>
                            </div>
                            <Button className=" py-4">
                                <h1> Send Message</h1>
                                <FaLocationArrow/>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
