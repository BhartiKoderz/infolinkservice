import React from "react";
import { BookOpen } from "lucide-react";

function CoursesOffered() {
    const courses = [
        { title: "Full Stack Developer" },
        { title: "Graphics Designer" },
        { title: "Python Developer" },
        { title: "Digital Marketing" },
        { title: "Java Developer" },
        { title: "MERN Stack" },
        { title: ".NET Developer" },
        { title: "MEAN Stack" },
        { title: "Data Analyst" },
        { title: "HR" },
        { title: "Software Tester" },
        { title: "Business Analyst" },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4  py-16">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2
                    className="text-4xl font-extrabold text-gray-900 mb-4"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                >
                    Courses <span className="text-[#1F497D]">We Offer</span>
                </h2>
                <p
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                    Explore our range of career-focused courses designed to make you
                    industry ready and boost your professional journey.
                </p>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  md:gap-8">
                {courses.map((course) => (
                    <div
                        key={course.title}
                        className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden group"
                    >
                        {/* Decorative gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1F497D]/10 via-transparent to-yellow-200/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                        {/* Content */}
                        <div className="relative p-8 flex flex-col items-center text-center">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4 group-hover:scale-110 transition">
                                <BookOpen className="w-8 h-8 text-[#1F497D]" />
                            </div>
                            <h3
                                className="text-lg font-semibold text-gray-900 group-hover:text-[#1F497D] transition"
                                style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                                {course.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoursesOffered;
