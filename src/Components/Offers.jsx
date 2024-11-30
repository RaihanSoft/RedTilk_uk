import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "animate.css";

import { FaCloud, FaShieldAlt, FaNetworkWired, FaCode } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Offers = () => {
  const offerRef = useRef(null);

  useEffect(() => {
    // GSAP animation for each card
    const cards = offerRef.current.querySelectorAll(".offer-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: offerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  // Icon mapping for titles
  const titles = [
    { title: "Development", icon: <FaCode /> },
    { title: "MSP", icon: <FaNetworkWired /> },
    { title: "Cloud", icon: <FaCloud /> },
    { title: "Cyber", icon: <FaShieldAlt /> },
  ];

  return (
    <div ref={offerRef} className="mt-16 px-6">
      <h2 className="text-center text-4xl text-white font-bold mb-8 animate__animated animate__fadeIn">
    What we offer
      </h2>
      <div className="flex items-center justify-center text-white/60 mb-8">
        <p className="border-2 border-red-700 text-center inline-block px-4 py-2 rounded-full">
          Our Experts will help you in the following fields
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12">
        {titles.map((item, index) => (
          <div
            key={index}
            className="offer-card relative bg-gradient-to-b from-[#520000] to-[#2b0000] text-white rounded-lg p-8 shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            <div className="absolute text-[150px] text-red-900/20 font-bold top-4 left-4">
              0{index + 1}
            </div>
            <h2 className="text-center text-3xl font-bold z-10 relative mb-6 flex items-center justify-center gap-4">
              {item.icon} {item.title}
            </h2>
            <div className="flex justify-end items-center">
              <div className="rounded-tl-2xl shadow-2xl border-2 border-red-600 p-6 text-white w-72 h-64 py-12 flex flex-col bg-red-700 text-lg">
                <p>✔️ Service 1</p>
                <p>✔️ Service 2</p>
                <p>✔️ Service 3</p>
                <p>✔️ Service 4</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
