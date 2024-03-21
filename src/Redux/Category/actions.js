

import { createAsyncThunk } from "@reduxjs/toolkit";



export const getCategories= createAsyncThunk(
'getCategories',

()=>{

    //const categories=["Men","Women","Kids","Best offers","All"];

   const categories= fetch(process.env.REACT_APP_API_URL+"/productcategories").then(res=>res.json());

 return categories;
}

);
