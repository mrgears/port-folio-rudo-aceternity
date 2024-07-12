"use client"
import React from 'react';
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaDocker, FaAws, FaPython } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { PiFileCpp, PiFileSql } from "react-icons/pi";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

function TechStack() {
    const technologies = [
        { icon: FaHtml5, name: "HTML5" },
        { icon: FaCss3, name: "CSS3" },
        { icon: RiTailwindCssFill, name: "TailwindCSS" },
        { icon: IoLogoJavascript, name: "JavaScript" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: FaReact, name: "ReactJS" },
        { icon: RiNextjsFill, name: "NextJS" },
        { icon: FaNodeJs, name: "NodeJS" },
        { icon: SiExpress, name: "ExpressJS" },
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiPostgresql, name: "PostgreSQL" },
        { icon: FaDocker, name: "Docker" },
        { icon: FaAws, name: "AWS" },
        { icon: PiFileCpp, name: "C++" },
        { icon: FaPython, name: "Python" },
        { icon: PiFileSql, name: "SQL" },

    ];

    return (
        <>
            <HeroHighlight>
            <section className="py-12 md:py-20 ">
                <div className="container px-4 md:px-6">
                    <div className="space-y-6 md:space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-[#e7e7e4]">My Tech Stack</h2>
                            <p className="text-muted-foreground max-w-[600px] mx-auto text-gray-700 dark:text-gray-300">
                                I use a variety of technologies and tools to build high-quality web applications. Here are some of the
                                key technologies I&apos;m proficient in.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {technologies.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center gap-2">
                                    <tech.icon className="w-12 h-12" />
                                    <span className="text-sm font-medium">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            </HeroHighlight>
        </>
    );
}

export default TechStack;
