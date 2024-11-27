import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div >
            {/* Navbar  */}
            <Navbar />

            {/* dynamic sections */}
            <Outlet />


            {/* footer  */}
            <Footer />
        </div>
    )
}

export default MainLayout
