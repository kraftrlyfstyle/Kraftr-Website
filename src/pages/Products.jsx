import { useState, useEffect } from 'react';
import { addCart, getProducts } from '../db';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Error from '../components/Error';  
import { MdShoppingCart, MdMenu } from "react-icons/md";

const Products = () => {
  const [token, setToken] = useState("")
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);

  async function getProductsLocal() {
    let [success, responseOrError] = await getProducts();
    setLoading(false);

    if(!success){
      setError(true);
      return;
    }

    setProducts([...responseOrError.shoes, ...responseOrError.bags]);
  }
 
  async function handleAddCart(id) {
    let res = await addCart(token, id)
    
    if (res[0] == false){
      // TODO Add toast & Remove Error component
      setError(true);
      return
    }
  }

  useEffect(() => {
    let token = localStorage.getItem("token");
    // if (token == "" || token == null || token == undefined) {
    //   window.location.replace("/");
    // }
    setToken(token);
    getProductsLocal();
  }, [])
  
  // TODO Add other products as well.

  return (
    <>

    {
      loading? (<div>Loading...</div>) :error? (<Error></Error>) : (<>
       <div className='flex items-center justify-between py-7 font-bold border-b border-black bg-[#F4ECE9]'>
      <div className='order-first text-lg ml-20'>
        <MdMenu size={35}/>
      </div>
      
      <div>
        <Link to={"/"} className="text-4xl tracking-widest font-bold">KRAFTR</Link>
      </div>
      <div className='order-last text-lg mr-16'>
        <Link to={"/cart"}>
          <MdShoppingCart size={35}/>
        </Link>
      </div>
    </div>

    <div className='flex flex-row text bg-[#F4ECE9] border-b border-black pb-4'>
      <div className='w-36 flex flex-col m-8'>
        <p className='text-lg mb-2'><b>FILTERS</b></p>
        <p>Price</p>
        <input type='range' min='1' max='100'></input>
      </div>
      <div className='flex-1'>
        
          <section className='grid grid-cols-4 md:grid-cols-3'>
            {products.map((product)=>{
              return (
              <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className='flex flex-col p-4 border-l-[1px] border-b-[1px] border-black last-of-type:border-r-[1px] hover:bg-[#eae0dd] transition-all' key={product.id}>

                  <Link to={`/product/shoe/${product.id}`} className='flex-1 flex items-center justify-center'>
                    <img className='rounded-sm h-fit w-fit' src={"http://127.0.0.1:8000" + product.cover_image} alt="" />
                  </Link>

                  <div>
                    {
                      product.shoe_type ? <p className='text-lg mt-4 mb-2 text-center'>Kraftr <b>{product.name}</b> {product.shoe_type.name}</p> : <p className='text-lg mt-4 mb-2 text-center'>Kraftr <b>{product.name}</b></p>
                    }
                    <p className='text-xl mb-3 text-center'>₹{product.price}</p>
                    <button onClick={()=>{handleAddCart(product.id)}} className='w-full border-[1px] border-black px-6 py-4 hover:bg-[#766261] hover:text-white text-lg transition-all tracking-wider hover:tracking-widest'>ADD TO CART</button>
                  </div>
                    
              </motion.div>)
            })}
          </section>
       
      </div>

    </div>

    <Footer></Footer>
      </>)
    }
  
    </>
  )
}

export default Products