import { createAsyncThunk } from "@reduxjs/toolkit";



export const getProducts= createAsyncThunk(

    "getProducts",

   ()=>{

  let products= fetch(process.env.REACT_APP_API_URL+"/getProducts").then(res=>res.json());
      return products;
   }
);



