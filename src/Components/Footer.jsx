import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    // Animation for Newsletter Section
    gsap.fromTo(
      footer.querySelector(".newsletter-section"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 80%",
        },
      }
    );

    // Animation for Footer Links
    gsap.fromTo(
      footer.querySelectorAll(".footer-links"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 80%",
        },
      }
    );

    // Animation for Copyright & Social Media Section
    gsap.fromTo(
      footer.querySelector(".copyright-section"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="newsletter-section p-6 rounded-lg flex flex-col lg:flex-row items-center justify-between mb-10">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-2xl font-semibold">Newsletter</h3>
            <p>Be the first one to know about insights, technologies, and innovations.</p>
          </div>
          <button className="btn bg-red-600 hover:bg-red-700 text-white rounded-md px-6 py-2">
            Subscribe
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="footer-links">
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Works</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="font-bold text-lg mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Customer Support</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Free eBooks</a></li>
              <li><a href="#" className="hover:underline">Development Tutorial</a></li>
              <li><a href="#" className="hover:underline">How to - Blog</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Social Media */}
        <div className="copyright-section flex flex-col md:flex-row justify-between items-center mt-10">
          <p className="text-sm text-center md:text-left">
            &copy; Copyright 2024, All Rights Reserved By Redlit
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-red-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-red-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white hover:text-red-500"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-red-500"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
