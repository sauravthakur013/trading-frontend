import axios from "axios";
import { DEV_API, PROD_API, DASH_API_DEV, DASH_API_PROD } from "./constants";

export const baseUrl = PROD_API;
export const newTab = DASH_API_PROD;

export const httpGet = async ({path}:{path:string}) => {
    const url = `${baseUrl}${path}`;
    try {
        const response = await axios.get(url, {
            headers:{
                Authorization : `Bearer ${localStorage.getItem('token')} username ${localStorage.getItem('username')}`,
                withCredentials: true
            }
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const httpPost = async ({path, data}:{path:string, data:any}) => {
    const url = `${baseUrl}${path}`;
    try {
        const response = await axios.post(url, data, {
            headers:{
                Authorization : `Bearer ${localStorage.getItem('token')} username ${localStorage.getItem('username')}`,
                withCredentials: true
            }
        });
        return response;
    } catch (error) {
        return error;
    }
}