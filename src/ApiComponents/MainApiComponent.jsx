import axios from 'axios'
import {requestAPI} from '../Constantas/Constantas'

export const ApiData = async ()=>{
    try {
        const {data} = await axios.get(requestAPI);
        return data;
    } catch(error){
        return null;
    }
};

export const GetSHOW = async (id)=>{
    try {
        const Show = `${requestAPI}/${id}`
        const {data} = await axios.get(Show);
        return data;
    } catch(error){
        return null;
    }
};

