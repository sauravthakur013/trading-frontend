import axios from "axios";

const baseUrl = process.env.PROD_API || process.env.DEV_API;

export const httpGet = async ({path}:{path:string}) => {
    const url = `${baseUrl}${path}`;
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        return error;
    }
}

export const httpPost = async ({path, data}:{path:string, data:any}) => {
    const url = `${baseUrl}${path}`;
    try {
        const response = await axios.post(url, data);
        return response;
    } catch (error) {
        return error;
    }
}