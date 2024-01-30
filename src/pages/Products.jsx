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
    <div className='flex flex-row text'>
      <div className='w-36 flex flex-col m-8'>
        Filter
      </div>

      <div className='flex-1'>
      {
        loading? (<div>Loading</div>) : error? (<div>Error Occurred</div>): (
          <section className='grid grid-cols-2 md:grid-cols-4 m-6'>
            {products.map((shoe)=>{
              return (
              <Link to={`/product/shoe/${shoe.id}`} key={shoe.id}>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} >
                  <div className='m-4'>
                    <img className='rounded-sm mb-2' src={"http://127.0.0.1:8000" + shoe.cover_image} alt="" />
                    <p>Kraftr <b>{shoe.name}</b> {shoe.shoe_type.name}</p>
                  </div>
                </motion.div>
              </Link>)
            })}
          </section>
        )
      }
      </div>

    </div>
  )
}

export default Products