import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhone, FaUsers,  FaChartLine,  FaEye } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef(null);
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const leftIconsRef = useRef(null);
  const rightIconsRef = useRef(null);

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
      "-=0.5"
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
      "-=0.5"
    );

    // Animation for the left icons
    gsap.fromTo(
      leftIconsRef.current.children,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 70%",
        },
      }
    );

    // Animation for the right icons
    gsap.fromTo(
      rightIconsRef.current.children,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <div className="relative">
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

        <p ref={paragraphRef} className="text-white/60">
          We help brands and B2B enterprises build amazing websites that convert
          their visitors to paying customers.
        </p>

        <button
          ref={buttonRef}
          className="btn rounded-full shadow-xl shadow-red-600 bg-red-600 border-none text-white flex items-center gap-2"
        >
          <FaPhone /> Let&apos;s have a call
        </button>
      </div>

      {/* Left Icons Section */}
      <div
        ref={leftIconsRef}
        className="absolute left-10 top-1/3 flex flex-col space-y-8 text-red-600"
      >
        <div className="text-4xl hidden md:flex ">
          <FaUsers size={60} className="ml-20" />
        </div>
        <div className="text-4xl">
          {/* <FaEye /> */}
        </div>
      </div>

      {/* Right Icons Section */}

      <div
        ref={rightIconsRef}
        className="absolute right-10 top-1/3 flex flex-col space-y-8 text-red-600"
        >
        <div>  <FaEye size={30} className="mr-20 hidden lg:flex -mt-14 " /> </div>
        <div className="text-4xl hidden md:flex ">
          <FaChartLine className="-ml-14 -mt-10 " size={60} />
        </div>
        <div className="text-4xl">
          {/* <FaDollarSign /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
