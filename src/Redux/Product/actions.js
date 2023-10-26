import { createAsyncThunk } from "@reduxjs/toolkit";



export const getProducts= createAsyncThunk(

    "getProducts",

   ()=>{

    let products= fetch("http://localhost:8000/getProducts").then(res=>res.json());
    return products;
   }
);