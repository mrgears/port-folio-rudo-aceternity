import React from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { RiNotionFill } from "react-icons/ri";

function Socials() {
    const socials = [
        {
            name: 'Github',
            icon: FaGithub,
            url: 'https://github.com/rudrax14',
        },
        {
            name: 'Twitter',
            icon: FaTwitter,
            url: 'https://twitter.com/rudram2003',
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://www.linkedin.com/in/rudram14/',
        },
        {
            name: 'Instagram',
            icon: FaInstagram,
            url: 'https://www.instagram.com/rudra.mondal/',
        },
        {
            name: 'Notion',
            icon: RiNotionFill,
            url: 'https://tungsten-umbrella-dbc.notion.site/b7ce24371cc6420ebb694c7d72f138eb?v=061e3d606bd44d458924688909157cab',
        },
    ];

    return (
        <section id='social' className="py-12 md:py-20 bg-slate-100 dark:bg-[#3d3d43]">
            <div className="container px-4 md:px-6">
                <div className="space-y-6 md:space-y-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
                        Connect with Me
                    </h2>
                    <p className="max-w-[600px] mx-auto text-gray-700 dark:text-gray-300">
                        Follow me on social media to stay updated with my latest projects and activities.
                    </p>
                    <div className="max-w-[600px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center items-center">
                        {socials.map((social) => (
                            <Link href={social.url} key={social.name} target="_blank" rel="noopener noreferrer">
                                <div
                                    className="flex flex-col items-center gap-2 p-4 rounded-md bg-slate-100 dark:bg-[#3d3d43] text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-black transition-colors"
                                    title={social.name}
                                >
                                    <social.icon className="w-8 h-8" />
                                    <span className="text-sm font-medium">{social.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Socials;
