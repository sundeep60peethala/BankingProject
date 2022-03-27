import axios from "axios";

export function openAccount(accountInfo:any){
    return axios.post("http://localhost:3000/accounts",accountInfo)
}