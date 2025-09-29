
import { Link } from "react-router-dom";
import img1 from '../../assests/job-fair-images/agnihotri-img.png';
import img2 from '../../assests/job-fair-images/kits-img.png';
import img3 from '../../assests/job-fair-images/wainganga-img.png';

const CampusDrive = () => {
   

    const driveImages = [img1, img2, img3];
    return (
        <section className="py-20 bg-gray-50" >
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Campus <span className="text-[#1F497D]">Drives</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Explore our campus drives designed to bridge the gap
                        between students and industry leaders.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {driveImages.map((img, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-4 flex items-center justify-center">
                            <img src={img} alt={`Campus Drive ${index + 1}`} className=" object-cover h-48 w-full" />
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <Link
                        to="/job-fairs"
                        className="uppercase border border-4 border-[#1F497D] text-[#1F497D] px-6 py-2 rounded-xl font-bold shadow hover:bg-blue-900 hover:text-white  transition"
                    >
                        View More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CampusDrive;
