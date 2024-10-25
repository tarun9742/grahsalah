import axios from "axios";

export const api = "http://192.168.1.3:4499/";

export const GetAllProducts = async () => {
  try {
    const response = await axios.post(`${api}user/get-product`);
    return response.data;
  } catch (error) { 
    throw error;
  }
};
