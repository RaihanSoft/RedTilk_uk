import { FaDatabase, FaJava, FaMonero, FaPastafarianism, FaReact } from "react-icons/fa"
import { FaRegWindowMinimize } from "react-icons/fa6"


const Superpowers = () => {
    return (
        <>
            <h2 className="text-center font-bold  text-white/60 text-4xl mt-10 " >Our Superpowers</h2>
            <div className="grid grid-cols-3 lg:grid-cols-6 justify-items-center gap-4 py-10" >
                <div><FaJava size={50} color="white" /></div>
                <div><FaPastafarianism size={50} color="white" /></div>
                <div><FaDatabase size={50} color="white" /></div>
                <div><FaRegWindowMinimize size={50} color="white" /></div>
                <div><FaMonero size={50} color="white" /></div>
                <div><FaReact size={50} color="white" /></div>
            </div>
        </>
    )
}

export default Superpowers
