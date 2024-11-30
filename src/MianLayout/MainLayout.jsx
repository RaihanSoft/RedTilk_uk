import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div >
            {/* Navbar  */}
            <Navbar />

            {/* dynamic sections */}
            <div className="min-h-[calc(100vh-516px)" >  <Outlet /></div>


            {/* footer  */}
            <Footer />
        </div>
    )
}

export default MainLayout
