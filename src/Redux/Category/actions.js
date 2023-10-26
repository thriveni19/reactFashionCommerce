

import { createAsyncThunk } from "@reduxjs/toolkit";



export const getCategories= createAsyncThunk(
'getCategories',

()=>{

    //const categories=["Men","Women","Kids","Best offers","All"];

    const categories= fetch("http://localhost:8000/productcategories").then(res=>res.json());

 return categories;
}

);