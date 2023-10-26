import "./_cat-nav.scss"
import {useDispatch,  useSelector} from "react-redux";
import categorySlice from "../Redux/Category/categorySlice";
import { getCategories } from "../Redux/Category/actions";
import { useEffect } from "react";
const CatNav= function()
{

  let  categories= useSelector(state=>state.categoryReducer.categories);
console.log(categories);

 const dispatch= useDispatch();
 
 useEffect(()=>{

    dispatch(getCategories());

 },[]);

    return(
  
        <div className="cat-nav-container container ">
  <ul >
  { categories.map((eachCategory,index)=>
  {
     if(!eachCategory.parent_category_id)
     return (
  <li className="list-items "  >
   <a href='#'> {eachCategory.category} </a> 
  </li>
  )})}
 
</ul>
        </div>




    )


}

export default CatNav