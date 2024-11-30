import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowAltCircleUp } from "react-icons/fa";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Image slide-in animation
    gsap.fromTo(
      section.querySelector(".image"),
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Starts animation when the section is 80% in view
        },
      }
    );

    // Content fade-in animation
    gsap.fromTo(
      section.querySelector(".content"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );

    // Button pop-in animation
    gsap.fromTo(
      section.querySelector(".button"),
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="text-center py-10">
        <p className="text-xl font-medium text-white/60">Read Our Blog</p>
        <h2 className="text-4xl font-bold text-white">
          Read Daily News About Startup Companies
        </h2>
      </div>

      <div className="lg:flex shadow-md">
        {/* Image Section */}
        <div className="h-68 p-5 image">
          <img
            className="h-full w-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bYhhCRdY2dN5RFuMD1nqghUQ5gCThG-MkQ&s"
            alt="Blog Thumbnail"
          />
        </div>

        {/* Content Section */}
        <div className="text-white p-5 content">
          <h2 className="text-3xl font-bold">Not Another Framework</h2>
          <p className="text-white/60 mt-4">
            We brought all the Remix goodies over to React Router and made improvements in the process. Now it&apos;s time to bring those improved APIs back over to Remix where they started!
          </p>

          <div className="mt-44 relative">
            <p>Collaboration Tools</p>
            <p>Collaboration Tools</p>
            <div className="absolute top-5 right-5 text-4xl">
              <FaArrowAltCircleUp />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="btn mt-10 text-white border-white bg-black button"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;
