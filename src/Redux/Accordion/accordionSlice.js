import { createSlice } from "@reduxjs/toolkit";


const initialState=[

    {category:"Men",items:["Shoes","Coats","Jackets","Party Wear","Shirts"]},
    {category:"Women",items:["Shoes","Coats","Jackets","Party Wear","Shirts"]},
    {category:"Kids",items:["Shoes","Coats","Jackets","Party Wear","Shirts"]},
]


const accordionSlice= createSlice({

    name:"accordion",
    initialState:initialState 
})


export default accordionSlice;