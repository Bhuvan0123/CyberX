import axios from 'axios';

const api_url="http://127.0.0.1:8000/api";

export const getProducts=()=>{
    return axios.get(`${api_url}/`);
}
