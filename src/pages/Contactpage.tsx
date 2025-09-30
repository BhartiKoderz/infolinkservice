
import { Mail, Phone, MapPin } from 'lucide-react'
import AboutBanner from '../sections/AboutSection/AboutBanner'

function Contactpage() {
    const title = "Contact Us";
    return (
        <>
            <AboutBanner title={title} />
            <section id="contact" className=" max-w-5xl mx-auto pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 flex  flex-col items-center gap-8">
                <div className="w-full  mx-auto flex-col lg:flex-row">
                    {/* <div className="text-center mb-16">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Get in<span className="text-[#1F497D]"> Touch</span>
                        </h2>
                        <p
                            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                            Ready to take the next step in your career journey? Contact us today and let's discuss
                            how we can help you achieve your goals.
                        </p>
                    </div> */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Contact Info */}
                        <div>
                            <div className='mb-8'>
                                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                                <p
                                    className="text-md text-gray-600 max-w-2xl mx-auto leading-relaxed"
                                    style={{ fontFamily: "Montserrat, sans-serif" }}
                                >
                                    Ready to take the next step in your career journey? Contact us today and let's discuss
                                    how we can help you achieve your goals.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Mail className="h-6 w-6  text-[#1F497D]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Email</h4>
                                        <p className="text-gray-600">info@placepro.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <Phone className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Phone</h4>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <MapPin className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Address</h4>
                                        <p className="text-gray-600">123 Business District, Tech City, TC 12345</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                                        <option>Select a service</option>
                                        <option>Campus Drives</option>
                                        <option>Training Programs</option>
                                        <option>Job Placement</option>
                                        <option>Corporate Partnership</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full  bg-[#1F497D] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.115827544431!2d79.07631157379977!3d21.107947885056856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf71bf8a7803%3A0x7cb660196d5ac23d!2sINFOLINK%20SERVICES!5e0!3m2!1sen!2sin!4v1759121451546!5m2!1sen!2sin"
                    className="max-w-5xl w-full h-[500px] rounded-2xl shadow-lg border-0"
                    style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </>
    )
}

export default Contactpage