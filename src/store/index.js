import { configureStore } from "@reduxjs/toolkit";
//importu kontrol et 
import auth from "./auth" 
import modal from "./modal"
import appearance from "./appearance"
const store = configureStore({
    reducer:{
        //store
        auth,
        modal,
        appearance
    }
})

export default store