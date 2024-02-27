import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import { getCart, deleteCart, getImageUrl, changeCart } from "../db";

// TODO Find out a shipping address library


function Checkout() {
  const [token, setToken] = useState("")
  const [cart, setCart] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);

  async function handleDelete(id) {
    let res = await deleteCart(token, id)
    
    if (res[0] == false){
      // TODO Add toast & Remove Error component
      setError(true);
      return
    }

    setCart(res[1].cart.cart);
  }

  async function handleChange(token, product_id, quantity) {
    let res = await changeCart(token, product_id, quantity);
    if (res[0] == false){
      // TODO Add toast & Remove Error component
      setError(true);
      return
    }
    setLoading(false)

    console.log(res[1].cart)

    setCart(res[1].cart.cart_items);
  }

  async function getCartInternal(token){
    let res = await getCart(token);
    if (res[0] == false){
      // TODO Add toast & Remove Error component
      setError(true);
      return
    }
    setLoading(false)

    console.log(res[1].cart)

    setCart(res[1].cart.cart_items);
  }

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token == "" || token == null || token == undefined) {
      window.location.replace("/");
    }
    setToken(token);
    getCartInternal(token);
  }, []);
  
  return (
  <div className="bg-[#F4ECE9] w-screen h-screen text overflow-hidden">
    {
      loading? (<div>Loading</div>) : error? (<div>Error Occurred</div>): (
        <div className="flex flex-col h-full w-full">
            <section className='flex flex-row items-center justify-between py-7 font-bold border-b-[1px] border-black bg-[#F4ECE9] px-4'>              
              <div className='tracking-widest'>
                <Link to={"/"} className="text-4xl tracking-widest font-bold logo-text">KRAFTR</Link>
              </div>
            </section>

            <section id="Body" className="flex flex-row h-full">
              <div id="Left" className="flex flex-col w-full border-r-[1px] h-full border-black p-8">
                <p className="text-xl">Information</p>
                <input placeholder="Email Address" className="bg-transparent p-2 outline-none border-[1px] border-black rounded-md " type="text" />

                <p className="mt-12 text-xl">Shipping Address</p>
                <input placeholder="Full Name" className="bg-transparent p-2 outline-none border-[1px] border-black my-2 rounded-md" type="text" />
                <input placeholder="Street Address" className="bg-transparent p-2 outline-none border-[1px] border-black mb-2 rounded-md" type="text" />

                <div className="flex flex-row justify-between mb-2">
                  <input placeholder="Email Address" className="bg-transparent p-2 outline-none border-[1px] border-black rounded-md w-full mr-3" type="text" />
                  <input placeholder="Email Address" className="bg-transparent p-2 outline-none border-[1px] border-black rounded-md w-full mr-3" type="text" />
                  <input placeholder="Email Address" className="bg-transparent p-2 outline-none border-[1px] border-black rounded-md w-full" type="text" />
                </div>

                <input placeholder="Town/City" className="bg-transparent p-2 outline-none border-[1px] border-black mb-2 rounded-md" type="text" />
                <input placeholder="Phone" className="bg-transparent p-2 outline-none border-[1px] border-black mb-2 rounded-md" type="text" />

                <Link to={"/checkout"} ><button className="font-bold text-sm mt-4 w-full border-[1px] border-black p-3 hover:bg-black hover:text-white transition-all">PROCEED TO PAY</button></Link>
              </div>

              <div id="Right" className=" border-r-[1px] h-full border-black overflow-y-scroll">
                {
                  cart.map((item)=>{
                    return (
                      <div key={item.id} className="flex flex-row items-center border-b-[1px] border-black w-full p-4">
                        <div className="h-32 w-64 flex items-center justify-center">
                          <img src={getImageUrl(item.product.cover_image)} alt="" className="h-32  rounded-xl mr-4"/>
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                          <p className="text-xl font-bold">Kraftr {item.product.name}</p>

                          <p className="text-md mb-2">{item.product.description}</p>

                          <p className="text-md">₹ {item.product.price}</p>

                          <div id="quantity button" className="flex flex-row w-fit border-[1px] border-black rounded-xl">
                            <button className="px-1 cursor-pointer text-lg">-</button>
                            <div className="px-1 text-lg border-x-[1px] border-black">{item.quantity}</div>
                            <button onClick={()=>{
                              handleChange();
                            }} className="px-1 cursor-pointer text-lg">+</button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

            </section>
          </div>
      )
    }
  </div>
  )
}

export default Checkout