import { configureStore } from "@reduxjs/toolkit";
//importu kontrol et 
import auth from "./auth" 
const store = configureStore({
    reducer:{
        //store
        auth
    }
})

export default store