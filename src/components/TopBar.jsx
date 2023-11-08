import { Link } from "react-router-dom"

const TopBar = () => {
  return (
    <section className="rounded-xl m-4 mx-8 p-4 px-8 flex justify-between items-center">
      <div id="Left" className="">
        <Link>Products</Link>
      </div>
      <div id="Center">
        <Link to={"/"} className="text-5xl font-bold">Kraftr</Link>
      </div>
      <div id="Right" className="">
        <Link>About Us</Link>
      </div>
    </section>
  )
}

export default TopBar