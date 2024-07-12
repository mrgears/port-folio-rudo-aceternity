import React from 'react'

function Education() {
    const education = [
        {
            institution: 'Universal College of Engineering (M.U)',
            degree: 'Degree',
            field: 'Field in ARTIFICIAL INTELLIGENCE & MACHINE LEARNING',
            years: '2021 - 2024',
        },
        {
            institution: 'Pravin Patil College of Diploma Engineering (MSBTE)',
            degree: 'Diploma',
            field: 'Field in INFORMATION TECHNOLOGY',
            years: '2018 - 2021',
        },

    ]

    return (
        // <section className="py-12 md:py-20 bg-white dark:bg-[#0f0f10]">
        //     <div className="container px-4 md:px-6 ">
        //         <div className="space-y-6 md:space-y-8 text-center">
        //             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
        //                 Education
        //             </h2>
        //             <div className="space-y-4">
        //                 {education.map((edu, index) => (
        //                     <div key={index} className="text-left max-w-[600px] space-y-2 mx-auto bg-gray-100 dark:bg-[#18181b] p-4 rounded-md">
        //                         <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{edu.institution}</h3>
        //                         <p className="text-gray-700 dark:text-gray-300">{edu.degree} in {edu.field}</p>
        //                         <p className="text-gray-700 dark:text-gray-300">{edu.years}</p>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <div className="h-fit w-full dark:bg-[#0f0f10] bg-white dark:bg-grid-white/[0.2] bg-grid-slate-400/[0.4] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className='flex flex-col mb-16'>

                <p className="text-4xl sm:text-7xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-600 dark:from-neutral-200 dark:to-neutral-500 py-8">
                    Education
                </p>
                <div className="space-y-4">
                    {education.map((edu, index) => (
                        <div key={index} className="text-left max-w-[600px] space-y-2 mx-auto bg-gray-100 dark:bg-[#18181b] p-4 rounded-md">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{edu.institution}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{edu.degree} in {edu.field}</p>
                            <p className="text-gray-700 dark:text-gray-300">{edu.years}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education
