import Axios from 'axios';
import { MEHODS, SERVICE_ROUTES } from '../constant';
export function productsServise(data){
    return new Promise((resolve,reject)=>{
        let config={
            url:SERVICE_ROUTES.PRODUCTS,
            method:MEHODS.GET,
            data,
        };
        Axios.request(config)
        .then((response)=>{
            return resolve(response);
        }).catch((error)=>{
            return reject(error)
        });
    });
}