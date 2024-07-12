"use client"
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { BackgroundBeams } from "./ui/background-beams";
import { HoverEffect } from "./ui/card-hover-effect";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


function truncateDescription(description, maxLength) {
    if (description.length <= maxLength) {
        return description;
    }
    return description.substring(0, maxLength).trim() + "...";
}

function Projects() {
    const projects = [
        {
            name: "ByteFlow-NextJs",
            description: "ByteFlow-NextJs is a professional Question & Answer platform tailored for developers. It allows users to ask questions, share knowledge, and learn from each other in a seamless and interactive environment. The platform integrates AI-driven responses to enhance the quality and speed of answers.",
            livesite: "https://byte-flow-next-js.vercel.app",
            github: "https://github.com/rudrax14/ByteFlow-NextJs",
            stack: ["Next.js", "TailwindCSS", "MongoDB", "Node.js", "GeminiAI", "Clerk"],
        },
        {

            name: "FindIntern",
            description: "A Internship Portal where students can find internships and companies can post internships. The project is built using MERN stack and has features like authentication, authorization, and CRUD operations.",
            livesite: "https://find-intern.vercel.app",
            github: "https://github.com/rudrax14/FindIntern",
            stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.io"],
        },
        {

            name: "StudentTeacher-Booking-Appointment",
            description: "This is a MERN stack project designed to facilitate the booking of appointments between students and teachers. The system includes functionalities for admins to manage teachers, for teachers to manage their appointments, and for students to book appointments with teachers.",
            livesite: "https://tutor-time-mern.vercel.app/",
            github: "https://github.com/rudrax14/MERN_STACK-StudentTeacher-Booking-Appointment",
            stack: ["React", "Redux", "Node.js", "Express", "MongoDB"],
        },
        {

            name: "Summer-Camp",
            description: "A web application built using HTML, CSS, JavaScript, Node.js, Express, and MongoDB. Users can log in, mark camp places with prices and photos, and review them with star ratings and comments. The homepage displays all camp posts on a map for easy exploration.",
            livesite: "https://summer-camp-ten.vercel.app/",
            github: "https://github.com/rudrax14/Summer-Camp",
            stack: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
        },
        {

            name: "Cloud-NoteBook",
            description: "Cloud-NoteBook is a web application that allows users to create, edit, and delete notes. The application is built using React, Redux, Node.js, Express, and MongoDB. It features user authentication, authorization, and CRUD operations.",
            livesite: "https://cloud-note-book-beta.vercel.app/login",
            github: "https://github.com/rudrax14/Cloud-NoteBook",
            stack: ["React", "Redux", "Node.js", "Express", "MongoDB"],
        },
    ];

    return (
        <section id="projects" className="py-12 md:py-20 projects h-fit bg-white dark:bg-[#0f0f10] w-full rounded-md relative flex flex-col items-center justify-center antialiased" >
            <div className="container px-4 md:px-6">
                <div className="space-y-6 md:space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">My Projects</h2>
                        <p className="max-w-[600px] mx-auto text-gray-700 dark:text-gray-300">
                            Check out some of the projects I&apos;ve worked on. Each project showcases my skills in various
                            technologies and design principles.
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project, index) => (
                                <Card key={index} className="bg-white flex flex-col z-40 dark:border-gray-800 shadow-sm dark:bg-[#18181b]">
                                    {/* <CardHeader>
                                    <div className="relative w-full h-64 hover:cursor-pointer ">
                                        <Image
                                            src={project.img}
                                            alt={project.name}
                                            layout="fill"
                                            // objectFit="contain"
                                            className="hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg"
                                        />
                                    </div>
                                </CardHeader> */}

                                    <CardContent className="p-4 flex flex-col justify-between h-full space-y-4">
                                        <div className="">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-[#e7e7e4]">{project.name}</h3>
                                            <HoverCard>
                                                <HoverCardTrigger className="text-gray-700 dark:text-[#cececb] hover:cursor-pointer">
                                                    {truncateDescription(project.description, 100)}
                                                </HoverCardTrigger>
                                                <HoverCardContent className="bg-white dark:bg-[#18181b] dark:border-gray-700">
                                                    <p className="text-gray-700 dark:text-white ">{project.description}</p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <div className="space-y-2 w-full">
                                                {project.stack.length > 0 && project.stack.map((tech, index) => (
                                                    <Badge key={index} variant="outline" className="mr-2 dark:border-gray-700 dark:text-gray-400 hover:cursor-pointer">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex gap-2">
                                                <Link href={project.livesite} legacyBehavior>
                                                    <a
                                                        className="inline-flex transition ease-in-out delay-150  h-8 items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 text-sm font-medium shadow
                                                    hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Live Site
                                                    </a>
                                                </Link>
                                                <Link href={project.github} legacyBehavior>
                                                    <a
                                                        className="inline-flex transition ease-in-out delay-150 h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm dark:bg-black dark:text-white
                                                    hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700 "
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        GitHub
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
       
                    </div>
                </div>
            </div>

            <BackgroundBeams />
        </section>
    );
}

export default Projects;
