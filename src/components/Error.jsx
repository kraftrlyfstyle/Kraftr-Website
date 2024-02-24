import Footer from "./Footer";
import {MdOutlineErrorOutline} from "react-icons/md";
import { Link } from "react-router-dom";

const Error = () => {
    return (
    <>
    <div className="flex w-full items-center justify-between border-b border-black py-7">
      <div className='order-first text-lg ml-20'>
        <Link to={"/"}>
        </Link>
      </div>

      <div>
      <Link to={"/"} className="text-4xl tracking-widest font-bold">KRAFTR</Link>
      </div>

      <div className='order-last text-lg mr-16'>
        <Link to={"/cart"}>
        </Link>
      </div>

    </div>
     <div id='Error' className='flex flex-col items-center  justify-center text '>
        <div className="text-3xl text-center py-56">Couldn't Load :(</div>
        
        <Footer></Footer>
    </div>
    
    </>
    )
  }
  
  export default Error