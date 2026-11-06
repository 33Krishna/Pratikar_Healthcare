import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const branches = [
    {
      city: "Bhubaneswar",
      title: "Bhubaneswar",
      phoneno: "+91 9114852533",
      address:
        "B19 Saheed Nagar, Jaganath hospital road in front of bikalananda rasagola, Bhubaneswar, 751007",
    },
    {
      city: "Bhubaneswar",
      title: "Bhubaneswar",
      phoneno: "+91 9114852532",
      address:
        "L222, Baramunda housing board colony near Baramunda sisumandir, 751030",
    },
  ];

  return (
    <footer className="bg-white text-gray-800 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-6">
              <a href="/" className="inline-block">
                <img
                  src="/images/sound_spectrum_logo_1.png"
                  alt="Logo"
                  className="w-20 h-20 object-contain"
                />
              </a>
            </div>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Your trusted partner in comprehensive ear healthcare. We're
              dedicated to improving your hearing and quality of life.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-600 hover:text-clinic-primary transition-colors"
              >
                <FaFacebook className="w-6 h-6 text-blue-500" />
              </a>
              {/* Instagram */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 hover:text-clinic-primary transition-colors"
              >
                <FaInstagram className="w-6 h-6 text-pink-500" />
              </a>
              {/* Twitter */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-600 hover:text-clinic-primary transition-colors"
              >
                <FaXTwitter className="w-6 h-6 text-black" />
              </a>
              {/* Youtube */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-600 hover:text-clinic-primary transition-colors"
              >
                <FaYoutube className="w-6 h-6 text-red-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#home"
                  className="text-gray-600 hover:text-clinic-primary transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-gray-600 hover:text-clinic-primary transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
                  className="text-gray-600 hover:text-clinic-primary transition-colors text-sm"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/#appointment"
                  className="text-gray-600 hover:text-clinic-primary transition-colors text-sm"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors text-sm"
                >
                  Hearing Assessments
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors text-sm"
                >
                  Hearing Aid trial & Fitting
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors text-sm"
                >
                  Ear Wax Removal
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors text-sm"
                >
                  Tinnitus Management
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors text-sm"
                >
                  Speech Therapy
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors text-sm"
                >
                  Occupational Therapy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Contact & Support
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <IoCallOutline className="h-5 w-5 text-clinic-primary flex-shrink-0" />
                <a
                  href="tel:+919114852533"
                  className="text-gray-600 hover:text-clinic-primary transition-colors text-sm"
                >
                  +91 911 485 2533
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MdOutlineEmail className="h-5 w-5 text-clinic-primary flex-shrink-0" />
                <a
                  href="mailto:pratikarhealthcare@gmail.com"
                  className="text-gray-600 hover:text-clinic-primary transition-colors text-sm break-all"
                >
                  pratikarhealthcare@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <IoTimeOutline className="h-5 w-5 text-clinic-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  Mon - Sat: 9:00 AM - 8:00 PM <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Clinic Branches */}
        <div className="border-t border-gray-200 mt-12 pt-10">
          <div className="text-center md:text-left mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Our Clinic Branches
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Visit our hearing care specialists at any of our branches across Odisha
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {branches.map((branch, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200/80 rounded-xl p-5 hover:border-clinic-primary/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2 text-clinic-primary font-bold text-base mb-2">
                    <CiLocationOn className="h-6 w-6 flex-shrink-0 text-clinic-primary" />
                    <span>{branch.title}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 pl-8">
                    {branch.address}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200/60">
                  <a
                    href={`tel:${branch.phoneno}`}
                    className="w-full flex items-center justify-center gap-2 bg-clinic-primary hover:bg-clinic-accent text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow active:scale-98 text-sm"
                    aria-label={`Call ${branch.title}`}
                  >
                    <IoCallOutline className="h-4 w-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Pratikar Health Care. All rights
              reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-clinic-primary text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-clinic-primary text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-clinic-primary text-sm"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
