import React from "react";
import AboutBanner from "../sections/AboutSection/AboutBanner";
import img1 from '../assests/teamimages/kaustubh_hulke.jpg';
import img2 from '../assests/teamimages/khushboo_ujwane.jpg';
import img3 from '../assests/teamimages/pranali_gavande.jpg';
import img4 from '../assests/teamimages/swati_more.jpg'
import { Facebook, Linkedin } from "lucide-react";

const Teampage = () => {
    // Sample team data
    const teamMembers = [
        {
            id: 1,
            name: "Kaustubh Hulke",
            role: "CEO & Founder",
            image: img1,
            social: {
                // twitter: "#",
                linkedin: "https://www.linkedin.com/in/kaustubh-hulke-b94876124/",
                facebook: "https://www.facebook.com/kaustubh.hulke/",
            },
        },
        {
            id: 2,
            name: "Khushboo Ujawane",
            role: "HR Manager",
            image: img2,
            social: {
                linkedin: "https://www.linkedin.com/in/khushboo-ujawane-3b39301a4/",
                facebook: "#",
            },
        },
        {
            id: 3,
            name: "Pranali Gavande",
            role: "HR Recruiter",
            image:img3,
            social: {
                linkedin: "https://www.linkedin.com/in/pranali-gavande-193a121b0/",
                facebook: "#",
            },
        },
        {
            id: 4,
            name: "Swati More",
            role: "HR Manager",
            image: img4,
            social: {
                linkedin: "#",
                facebook: "#",
            },
        },
    ];
    const title = "Our Team"
    return (
        <>
            <AboutBanner title={title} />
            {/* <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"> */}
            <div className="max-w-5xl mx-auto mb-20">
                {/* <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Meet Our Team
                        </h1>
                       
                    </div> */}

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative h-64 w-full">
                                <img
                                    className="h-full w-full object-cover"
                                    src={member.image}
                                    alt={member.name}
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                        <p className="text-sm font-medium text-indigo-600">{member.role}</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex space-x-3">
                                    {/* <a
                                        href={member.social.twitter}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">Twitter</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a> */}
                                    <a
                                        href={member.social.linkedin}
                                        target="_blank"
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">LinkedIn</span>
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={member.social.facebook}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">Facebook</span>
                                        <Facebook className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default Teampage;
