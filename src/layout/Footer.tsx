import { Facebook, Twitter, Linkedin, Instagram, X } from "lucide-react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Link to="/">
                <img src={logo} alt="logo" className="h-12 w-40" />
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in career development and talent acquisition.
              We connect aspirations with opportunities, creating success stories
              that inspire.
            </p>
            <div className="flex space-x-4">
              <a
                href="/https://www.facebook.com/kaustubh.hulke/"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1F497D] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              {/* <a
                href="#"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <X className="h-5 w-5" />
              </a> */}
              <a
                href="/https://www.linkedin.com/in/kaustubh-hulke-b94876124/"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a
                href="#"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li> */}
              <li>
                <Link
                  to="/partners"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/job-fairs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Campus Drives
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Training Programs
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/job-placement"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Job Placement
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to="/career-counseling"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Career Counseling
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to=""
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to=""
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to=""
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
