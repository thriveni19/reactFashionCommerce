import "./_cat-nav.scss"
import {useSelector} from "react-redux";
import categorySlice from "../store/slices/categorySlice/categorySlice";
const CatNav= function()
{

  let  categories= useSelector(categorySlice.getInitialState);
    return(
  
        <div className="cat-nav-container  ">
  <ul >
  { categories.map((eachCategory,index)=>
  {
return (
  <li className="list-items "  >
   <a href='#'> {eachCategory} </a> 
  </li>
  )})}
 
</ul>
        </div>




    )


}

export default CatNav