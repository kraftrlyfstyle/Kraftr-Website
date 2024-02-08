import { useEffect, useState } from "react"

function Profile() {
  const [token, setToken] = useState("")

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token == "" || token == null || token == undefined) {
      window.location.replace("/");
    }
    setToken(token);
  }, [])
  
  return (
    <div>
      {token}
    </div>
  )
}

export default Profile