import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { getShoes } from '../db';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <div className='flex flex-col'>
      <TopBar></TopBar>
      
      {
        loading? (<div>Loading</div>) : error? (<div>Error Occurred</div>): (
          <section className='grid grid-cols-2 md:grid-cols-3 mx-6 mb-4'>
            {products.map((shoe)=>{
              return (
              <Link to={`/product/shoe/${shoe.id}`} key={shoe.id}>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} >
                  <div className='bg-gray-100 rounded-xl p-4 mx-4'>
                    <img className='rounded-xl mb-2' src={"http://127.0.0.1:8000" + shoe.cover_image} alt="" />
                    <p>{shoe.name}</p>
                  </div>
                </motion.div>
              </Link>)
            })}
          </section>
        )
      }
      
      <Footer></Footer>
    </div>
  )
}

export default Products