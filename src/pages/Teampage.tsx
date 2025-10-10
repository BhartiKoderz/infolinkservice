import React from "react";
import AboutBanner from "../sections/AboutSection/AboutBanner";
import img1 from '../assests/teamimages/kaustubh_hulke.jpg';
import img2 from '../assests/teamimages/khushboo_ujwane.jpg';
import img3 from '../assests/teamimages/pranali_gavande.jpg';
import img4 from '../assests/teamimages/swati_more.jpg'
import { FacebookIcon, Linkedin } from "lucide-react";

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
                // facebook: "#",
            },
        },
        {
            id: 3,
            name: "Pranali Gavande",
            role: "HR Recruiter",
            image: img3,
            social: {
                linkedin: "https://www.linkedin.com/in/pranali-gavande-193a121b0/",
                // facebook: "#",
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

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* <div className="relative h-64 w-full">
                              <img
                                    className="h-full w-full object-cover"
                                    src={member.image}
                                    alt={member.name}
                                />
                            </div> */}
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                        <p className="text-sm font-medium text-indigo-600">{member.role}</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex space-x-3">
                                    <a
                                        href={member.social.linkedin}
                                        target="_blank"
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">LinkedIn</span>
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    {member?.social?.facebook && (
                                        <a
                                            href={member.social.facebook}
                                            className="text-gray-400 hover:text-gray-500"
                                        >
                                            <span className="sr-only">Facebook</span>
                                            <FacebookIcon className="w-4 h-4" />
                                        </a>
                                    )}
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
