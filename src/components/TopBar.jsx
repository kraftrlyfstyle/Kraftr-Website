import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react"
import { Link } from "react-router-dom"
import { useHorizontalScroll } from '../components/ScrollHook';

import shoe1 from '../assets/images/1.png';
import shoe2 from '../assets/images/2.png';
import shoe3 from '../assets/images/3.png';
import shoe4 from '../assets/images/4.png';
import shoe5 from '../assets/images/5.png';

const TopBar = () => {
  const [productsShown, setProductsShown] = useState(false);
  let scrollRef = useHorizontalScroll();

  return (
    <>
      <section className="rounded-xl m-4 mx-8 p-4 px-8 flex justify-between items-center bg-gray-100">
        <div id="Left" className="">
          <Link to={"/products"} onMouseOver={()=>{setProductsShown(true);}}>Products</Link>
        </div>
        <div id="Center">
          <Link to={"/"} className="text-5xl font-bold">Kraftr</Link>
        </div>
        <div id="Right" className="">
          <Link>About Us</Link>
        </div>
      </section>

      <AnimatePresence>

      {productsShown && 
        <motion.section ref={scrollRef} initial={{height: "0rem"}} animate={{height: "10rem"}} exit={{height: "0rem"}} className="w-full float-left whitespace-nowrap overflow-x-scroll overflow-y-hidden px-8 scroll-none mb-6" transition={{duration: 0.5}} onMouseLeave={()=>{setProductsShown(false)}}>
          {
            [
              {id: 1, image: shoe1}, 
              {id: 2, image: shoe2}, 
              {id: 3, image: shoe3}, 
              {id: 4, image: shoe4}, 
              {id: 5, image: shoe5},
              {id: 6, image: shoe5},
              {id: 7, image: shoe5},
              {id: 8, image: shoe5},
              {id: 9, image: shoe5},
            ].map((item)=>{return <motion.div key={item.id} className='w-36 cursor-pointer rounded-xl mx-[0.6rem] h-36 shadow-md  inline-block '
            transition={{duration: 1, ease: "easeInOut"}} 
            style={{ backgroundImage:`url(${item.image})`, backgroundSize: "cover", }} />})
          }
        </motion.section>}
      </AnimatePresence>

      
    </>
  )
}

export default TopBar