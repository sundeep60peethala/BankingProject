import { ACCOUNT_OPEN, ACCOUNT_OPEN_IN_PROGRESS } from "./actionTypes";

export function accountOpenAction (){
    return {
        type:ACCOUNT_OPEN,
        payLoad:{
            name:"Murali",
            email:"vmurali@gmail.com"
        }
    }
}