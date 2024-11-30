import Marquee from "react-fast-marquee";
import { FaAutoprefixer, FaCloudflare, FaDigitalOcean, FaGithub, FaLinode } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const Brands = () => {
  return (
    <div className="pb-20 space-y-10">
      <p className="text-white/50 pt-20 text-center">TRUSTED BY OUR PARTNERS</p>
      
      <Marquee gradient={false} speed={50}>
        <div className="flex items-center space-x-10 sm:space-x-52">
          <FaGithub size={50} color="white" />
          <FaDigitalOcean size={50} color="white" />
          <FaLinode size={50} color="white" />
          <FaCloudflare size={50} color="white" />
          <FaGoogleScholar size={50} color="white" />
          <FaAutoprefixer size={50} color="white" />
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
