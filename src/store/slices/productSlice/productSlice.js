
import { createSlice } from "@reduxjs/toolkit";
const productData= [

    {
       pName:"Jacket",
       price:45,
       img:'shop-1.jpg'

    },
    
    {
       pName:"Purse",
       price:50,
       img:'shop-2.jpg'

    },

    
    {
       pName:"Dress",
       price:40,
       img:'shop-3.jpg'

    },

    
    {
       pName:"Denim",
       price:45,
       img:'shop-4.jpg'

    },

    
    {
       pName:"Boots",
       price:45,
       img:'shop-5.jpg'

    },

    
    {
       pName:"Bag",
       price:45,
       img:'shop-6.jpg'

    }

   ]


const productSlice= createSlice({

  name:"Products",
  initialState:productData


});


export default productSlice;
