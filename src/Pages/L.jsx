import Banner from "../Components/Banner"
import Blog from "../Components/Blog"
import Brands from "../Components/Brands"
import Offers from "../Components/Offers"
import ReserveCall from "../Components/ReserveCall"
import Superpowers from "../Components/Superpowers"

const L = () => {
  return (
    <div className=" px-2  ">
      {/* Banner  */}
      <Banner />
      <Brands />
      <Offers />
      <Superpowers />
      <Blog />
      <ReserveCall />

    </div>
  )
}

export default L
