import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

// TODO Find out a shipping address library


function Checkout() {
  const [token, setToken] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token == "" || token == null || token == undefined) {
      window.location.replace("/");
    }
    setToken(token);
  }, [])
  
  return (
  <div className="bg-[#F4ECE9] w-screen h-screen text">
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
              </div>

              <div id="Right" className="w-full">
                yuh
              </div>

            </section>
          </div>
      )
    }
  </div>
  )
}

export default Checkout