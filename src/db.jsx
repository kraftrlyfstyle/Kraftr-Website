import axios from 'axios';

let dev = true;
let baseUrl = "";
// let tokenUrl = "";

if (dev) {
  baseUrl = "http://127.0.0.1:8000/api/v1/";
  // tokenUrl = "http://127.0.0.1:8000/token";
} else {
  baseUrl = "https://truedoapi-1-u8581356.deta.app/api/v1/";
  // tokenUrl = "https://truedoapi-1-u8581356.deta.app/token";
}

async function getShoes() {
  try {
    let response = await axios.get(baseUrl + "products/shoes/get");
    return [true, response.data];
  } catch (e) {
    return [false, e];
  }
}

async function getShoesById(id) {
  try {
    let response = await axios.get(baseUrl + "products/shoes/get/" + id.toString());
    return [true, response.data];
  } catch (e) {
    return [false, e];
  }
}

export {getShoes, getShoesById}