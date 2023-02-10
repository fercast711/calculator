import { configureStore } from "@reduxjs/toolkit";
import convertReducer from "./slice/coverterSlice";

export default configureStore({
    reducer:{
        convert:convertReducer
    }
})