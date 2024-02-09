/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Footer from '../components/Footer'; 
import { MdShoppingCart, MdMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

import * as db from "../db"

const Product = () => {
  let params = useParams()
  const [shoe, setShoe] = useState({})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getShoeInfoLocal() {
    let [success, responseOrError] = await db.getShoesById(params.id);
    setLoading(false);
    
    if(!success){
      setError(true);
      return;
    }

    setShoe(responseOrError.shoe);
    return
  }

  useEffect(() => {
    getShoeInfoLocal();
  }, [])
  

  return (
    <>

    <div className='flex flex-row'>
      
      <div className="flex basis-1/3 justify-center items-center h-full">
      <img className="rounded-md" src={"http://127.0.0.1:8000" + shoe.cover_image} alt="" />
      </div>


      <div className="flex basis-2/3  bg-[#F4ECE9]">
        
      </div>
    </div>

    <Footer></Footer>

    </>
  )
}

export default Product