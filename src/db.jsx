import axios from 'axios';

let dev = true;

let baseUrl = "";
let imageUrl = "";
// let tokenUrl = "";

if (dev) {
  imageUrl = "http://127.0.0.1:8000";
  baseUrl = "http://127.0.0.1:8000/api/v1/";
  // tokenUrl = "http://127.0.0.1:8000/token";
} else {
  imageUrl = "https://truedoapi-1-u8581356.deta.app/";
  baseUrl = "https://truedoapi-1-u8581356.deta.app/api/v1/";
  // tokenUrl = "https://truedoapi-1-u8581356.deta.app/token";
}

function getImageUrl(path) {
  return imageUrl + path.substring();
}

async function getProducts() {
  try {
    let response = await axios.get(baseUrl + "products/get");
    console.log(response)
    return [true, response.data];
  } catch (e) {
    return [false, e];
  }
}

async function getShoes() {
  try {
    let response = await axios.get(baseUrl + "products/shoes/get");
    console.log(response)
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

async function login(email, password){
  try {
    let response = await axios.post(baseUrl + "user/login", 
      {email: email, password: password}, 
      {headers: {"Content-Type": "application/json"}}
    );
    return [true, response.data];
  } catch (e) {
    return [false, await JSON.stringify(e.data)];
  }
}

async function getCart(token) {
  try {
    let response = await axios.get(baseUrl + "user/cart", 
      {headers: {"Authorization": "Token " + token.toString()}}
    );
    return [true, response.data];
  } catch (e) {
    console.log(e);
    return [false, await JSON.stringify(e.data)];
  }
}

async function deleteCart(token, product_id) {
  try {
    let response = await axios.post(baseUrl + "user/cart/delete/" + product_id, 
      {}, 
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token " + token.toString()
        }
      }
    );
    return [true, response.data];
  } catch (e) {
    return [false, await JSON.stringify(e.data)];
  }
}

async function addCart(token, product_id) {
  try {
    let response = await axios.post(baseUrl + "user/cart/add", 
      {"id": product_id}, 
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token " + token.toString()
        }
      }
    );
    return [true, response.data];
  } catch (e) {
    return [false, await JSON.stringify(e.data)];
  }
}


export {getShoes, getShoesById, login, getCart, getProducts, deleteCart, addCart, getImageUrl}