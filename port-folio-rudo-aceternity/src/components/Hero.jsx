'use client'
import React from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import RUDRA from '/public/rudra-pic.jpg';
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
// import Link from 'next/link';


function Hero() {
    const words = [
        {
            text: "Rudra",
        },
        {
            text: "Alok",
        },
        {
            text: "Mondal",
        },
    ];

    const socialLinks = [
        { href: "https://github.com/rudrax14", icon: GithubIcon, label: "GitHub" },
        { href: "https://twitter.com/rudram2003", icon: TwitterIcon, label: "Twitter" },
        { href: "https://www.linkedin.com/in/rudram14/", icon: LinkedinIcon, label: "LinkedIn" },
    ];

    return (
        <header id='hero' className="py-12 md:py-20 bg-cyan-200 dark:bg-[#e6e6e6] dark:text-[#323232]">
            <div className="container px-4 md:px-24">
                <div className="grid gap-6 xl:grid-cols-2 xl:gap-12">
                    <div className="space-y-4">
                        <TypewriterEffectSmooth words={words} />
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-[#323232]">Full-Stack Developer</h2>
                        <p className="text-gray-600 dark:text-[#323232] max-w-[600px]">
                            I&apos;m a passionate full-stack developer with a strong background in building modern, responsive, and
                            scalable web applications. I love exploring new technologies and continuously learning to improve my
                            skills.
                        </p>
                        <div className="flex gap-4">
                            <button>
                                <Link
                                    to='projects'
                                    smooth={true}
                                    duration={500}
                                    offset={20}
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 dark:bg-black text-white dark:text-[#e6e6e6] px-6 text-sm font-medium shadow transition-colors hover:bg-slate-900 hover:dark:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-200 "
                                >
                                    View Projects
                                </Link>
                            </button>
                            <button>
                                <Link
                                    to="social"
                                    smooth={true}
                                    duration={1200}
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-800 bg-white dark:bg-[#e6e6e6] px-6 text-sm font-medium text-gray-800 dark:text-black dark:border-black shadow-sm transition-colors hover:bg-gray-100  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-200"
                                >
                                    Contact Me
                                </Link>
                            </button>
                        </div>
                        <div className="flex gap-4 items-center">
                            {socialLinks.map((link, index) => (
                                <SocialIcon key={index} href={link.href} icon={link.icon} label={link.label} />
                            ))}
                        </div>
                    </div>

                    <div className="flex xl:justify-end justify-center">
                        <Image
                            src={"https://res.cloudinary.com/dipv5sufo/image/upload/v1720799569/Portfolio/rudra_pic_ddisaa.jpg" || RUDRA}
                            width="400"
                            height="400"
                            alt="Rudra Mondal"
                            className="rounded-full w-[300px] h-[300px] object-cover border-gray-800 dark:border-[#18181b] border-4"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

function SocialIcon({ href, icon: Icon, label }) {
    return (
        <a href={href} aria-label={label} className="text-gray-800 hover:underline dark:text-[#323232]">
            <Icon className="w-6 h-6" />
        </a>
    );
}

function GithubIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}

function LinkedinIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
            />
        </svg>
    );
}

export default Hero;
