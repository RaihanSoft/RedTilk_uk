import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "animate.css";
import { FaPhone } from "react-icons/fa";

const Banner = () => {
  const bannerRef = useRef(null);
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation for the headline
    tl.fromTo(
      headlineRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Animation for the paragraph
    tl.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5" // Overlap with headline animation
    );

    // Animation for the button
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.5" // Overlap with paragraph animation
    );
  }, []);

  return (
    <>
      <div
        ref={bannerRef}
        className="px-2 text-center flex items-center justify-center flex-col py-24 space-y-10"
      >
        <h2
          ref={headlineRef}
          className="text-4xl flex flex-col font-bold text-white lg:text-6xl"
        >
          <span>From Concept to Code</span>
          <span className="text-red-600">We Make IT Happen</span>
        </h2>

        <p
          ref={paragraphRef}
          className="text-white/60"
        >
          We help brands and B2B enterprises build amazing websites that convert
          their visitors to paying customers.
        </p>

        <button
          ref={buttonRef}
          className="btn rounded-full shadow-xl shadow-red-600 bg-red-600 border-none text-white"
        >
        <FaPhone />  Let&apos;s have a call
        </button>
      </div>
    </>
  );
};

export default Banner;
