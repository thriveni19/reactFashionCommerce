
export default CatNav
  let  categories= useSelector(state=>state.categoryReducer.categories);
console.log(categories);

 const dispatch= useDispatch();
 
 useEffect(()=>{

    dispatch(getCategories());

 },[]);

    return(
  
        <div className="cat-nav-container container ">
  <ul >
  <li className="list-items "  >
   <Link to="/">Home</Link>
   </li>
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
