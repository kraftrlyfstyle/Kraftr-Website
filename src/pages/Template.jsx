import { useEffect, useState } from "react"

import * as db from "../db"
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

const Template = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getDataLocal() {
    let [success, responseOrError] = await db.getData();
    setLoading(false);
    
    if(!success){
      setError(true);
      return;
    }

    setData(responseOrError.data);
    return
  }

  useEffect(() => {
    getDataLocal();
  }, [])

  return (
    <>
      <TopBar></TopBar>
      {
        loading? (<div>Loading</div>) : error? (<div>Error Occurred</div>): (
          <>{data}</>
        )
      }
      <Footer></Footer>
    </>
  )
}

export default Template