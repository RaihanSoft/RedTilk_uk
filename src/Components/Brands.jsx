import { FaAutoprefixer, FaCloudflare, FaDigitalOcean, FaGithub, FaLinode } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
const Brands = () => {
    return (
        <div className="pb-20 space-y-10">
            <p className="text-white/50 pt-20 text-center" >TRUSTED BY OUR PARTNERS</p>
            <div className="flex items-center  justify-around " >
                <div> <FaGithub size={50} color="white" /> </div>
                <div> <FaDigitalOcean size={50} color="white" /> </div>
                <div> <FaLinode size={50} color="white" /> </div>
                <div> <FaCloudflare size={50} color="white" /> </div>
                <div> <FaGoogleScholar size={50} color="white" /> </div>
                <div> <FaAutoprefixer size={50} color="white" /> </div>
            </div>

        </div>
    )
}

export default Brands
