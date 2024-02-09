import { useEffect } from "react"
import { login } from "../db";

const Login = (props) => {
  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log(token);
    if (!token || token == null || token == "") {
      // TODO don't redirect
      return
    }
    // window.location.replace("/")
  }, [])

  async function handleForm(e) {
    e.preventDefault();
    let email = e.target.email.value
    let password = e.target.password.value

    if(email == "" || email == null || email == undefined || password == "" || password == null || password == undefined) {
      // TODO Add toast here
      return
    }

    let res = await login(email, password)
    if (res[0] == false) {
      // TODO Add error toast here
      return
    }

    localStorage.setItem("token", res[1].token)
    window.location.replace("/")
  }
  

  return (
    
    <div className="h-[100dvh] w-full flex flex-col items-center justify-center text">
      <form className="flex flex-col items-center justify-center" onSubmit={handleForm}>
        <input className="border-[1px] outline-none border-black p-2 rounded-xl" placeholder="email" name="email" type="email" />
        <input className="border-[1px] outline-none border-black p-2 rounded-xl my-2" name="password" placeholder="password" type="password" />
        <button className="border-[1px] outline-none border-black p-2 rounded-xl my-2" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login