import { useState, useEffect } from 'react';
import { getShoes } from '../db';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { MdShoppingCart, MdMenu } from "react-icons/md";

const Products = () => {
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);

  async function getProductsLocal() {
    let [success, responseOrError] = await getShoes();
    setLoading(false);

    if(!success){
      setError(true);
      return;
    }
    
    setProducts(responseOrError.shoes);
  }

  useEffect(() => {
    getProductsLocal();
  }, [])
  
  // TODO Add other products as well.

  return (
    <>
  
    <div className='flex items-center justify-between py-7 font-bold border-b border-black bg-[#F4ECE9]'>
      <div className='order-first text-lg ml-20'>
        <MdMenu size={35}/>
      </div>
      
      <div className='tracking-widest'>
        <Link to={"/"} className="text-4xl tracking-widest font-bold">KRAFTR</Link>
      </div>
      <div className='order-last text-lg mr-16'>
        <MdShoppingCart size={35}/>
      </div>
    </div>

    <div className='flex flex-row text bg-[#F4ECE9] border-b border-black pb-4'>
      <div className='w-36 flex flex-col m-8'>
        <p className='text-lg mb-2'><b>FILTERS</b></p>
        <p>Price</p>
        <input type='range' min='1' max='100'></input>
      </div>
      <div className='flex-1'>
        
      {
        loading? (<div>Loading</div>) : error? (<div>Error Occurred</div>): (
          <section className='grid grid-cols-4 md:grid-cols-3'>
            {products.map((shoe)=>{
              return (
              <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className='flex flex-col p-4 border-l-[1px] border-b-[1px] border-black last-of-type:border-r-[1px]' key={shoe.id}>

                  <Link to={`/product/shoe/${shoe.id}`} className='flex-1 flex'>
                    <img className='rounded-sm ' src={"http://127.0.0.1:8000" + shoe.cover_image} alt="" />
                  </Link>

                  <div>
                    <p className='text-lg mt-4 mb-2 text-center'>Kraftr <b>{shoe.name}</b> {shoe.shoe_type.name}</p>
                    <p className='text-xl mb-3 text-center'>₹{shoe.price}</p>
                    <button className='w-full border-[1px] border-black px-6 py-4 hover:bg-[#766261] hover:text-white text-lg transition-all tracking-wider hover:tracking-widest'>ADD TO CART</button>

                  </div>
                    
              </motion.div>)
            })}
          </section>
        )
      }
      </div>

    </div>

    <Footer></Footer>
    </>
  )
}

export default Products