import { useEffect, useState } from "react"
import { deleteCart, getCart, getImageUrl } from "../db";

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

    setCart(res[1].cart.cart);
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
    <div className='h-[100dvh] w-screen flex text'>
      {
        loading? (<div>Loading</div>) : error? (<div>Error Occurred</div>): (
          <div>
            {
              cart.map((item)=>{
                return (
                  <div key={item.id} className="flex flex-row shadow-md w-full rounded-xl p-4">
                    <img src={getImageUrl(item.cover_image)} alt="" className="h-32 rounded-xl mr-4"/>
                    <div className="flex flex-col justify-between">
                      <p className="text-xl">Kraftr {item.name}</p>
                      <p className="text-md">{item.description}</p>
                      <p className="text-md">{item.price} /-</p>
                      <div className="flex flex-row mt-3">
                        <button onClick={()=>{handleDelete(item.id)}}>Remove from cart</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default Cart