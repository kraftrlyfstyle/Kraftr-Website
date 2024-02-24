import { useEffect, useState } from "react"
import { deleteCart, getCart, getImageUrl } from "../db";

import { Link } from 'react-router-dom';

function Cart() {
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
    <div className='h-[100vh] w-screen flex text bg-[#F4ECE9]'>
      {
        loading? (<div>Loading</div>) : error? (<div>Error Occurred</div>): (
          <div className="flex flex-col h-full w-full">
            <section className='flex flex-row items-center justify-between py-7 font-bold border-b-[1px] border-black bg-[#F4ECE9] px-4'>              
              <div className='tracking-widest'>
                <Link to={"/"} className="text-4xl tracking-widest font-bold logo-text">KRAFTR</Link>
              </div>
              {/* <div className='order-last text-lg mr-16'>
                <Link to={"/cart"}>
                  <MdShoppingCart size={35}/>
                </Link>
              </div> */}
            </section>

            <section id="Body" className="flex flex-row h-full overflow-hidden">
              <div id="Left" className="flex-1 border-r-[1px] h-full border-black overflow-y-scroll">
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
                            <div className="px-1 cursor-pointer text-lg">-</div>
                            <div className="px-1 text-lg border-x-[1px] border-black">{item.quantity}</div>
                            <div className="px-1 cursor-pointer text-lg">+</div>
                          </div>

                          <div className="flex flex-row mt-3">
                            <button onClick={()=>{handleDelete(item.id)}}>Remove from cart</button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              <div id="Right" className="w-60 flex flex-col justify-between m-4 sticky">
                <div id="top">
                  <p className="font-bold text-lg">Coupons</p>
                  <div className="border-[1px] border-black flex flex-row justify-between">
                    <input className="bg-transparent p-2 outline-none" type="text" />
                    <button className="font-bold text-sm p-2">APPLY</button>
                  </div>
                </div>
                <div id="bottom">
                  <div className="">
                    <p>Subtotal: </p>
                    <p>Shipping: </p>
                    <p>Cart Total: </p>
                  </div>
                  <Link to={"/checkout"} ><button className="font-bold text-sm mt-4 w-full border-[1px] border-black p-3 hover:bg-black hover:text-white transition-all">CHECKOUT</button></Link>
                </div>
                
              </div>

            </section>
          </div>
        )
      }
    </div>
  )
}

export default Cart