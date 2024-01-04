/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TopBar from "../components/TopBar";

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
    <div className="flex flex-col">
      <TopBar></TopBar>
      {
        loading? (<div>Loading</div>) : error? (<div>Error Occurred</div>): (
          <section className="flex flex-row mx-8 bg-gray-100 p-4 rounded-xl">

            <section id="Left" className="w-full">
              <img className="rounded-xl" src={"http://127.0.0.1:8000" + shoe.cover_image} alt="" />
              <div className="flex flex-row mt-4">
              {
                shoe.images.map((image)=>{return(
                    <img key={image.id} className="h-24 rounded-xl mr-2" src={"http://127.0.0.1:8000" + image.image} alt="" />
                )})
              }
              </div>
            </section>

            <section id="Right" className="w-full p-8 px-12">
              <h2 className="text-2xl flex">Kraftr <p className="px-2 font-bold mb-8">{shoe.name}</p> {shoe.shoe_type.name}</h2>

              <section id="Sizes" className="flex flex-col mb-8 ">
                <p className="text-sm">Sizes</p>
                <div className="grid grid-cols-4 mt-6 w-1/2">
                  {shoe.shoe_sizes.map((size)=>{
                    return (
                      <div key={size.id} className="rounded-md bg-gray-100 p-4 mr-2 w-[4.2rem] flex justify-center cursor-pointer">
                        <p className="text-xs">{size.shoe_size_type} {size.size}</p>
                      </div>
                  )})}
                </div>
              </section>

              <section id="Cart" className="flex flex-row items-center">
                <button className="bg-purple-600 rounded-3xl text-white px-7 py-4 text-xs mr-4">Add To Cart</button>
                <h2 className="text-2xl">₹{shoe.price}</h2>
              </section>
            </section>

          </section>
        )
      }
      {/* <Footer></Footer> */}
    </div>
  )
}

export default Product