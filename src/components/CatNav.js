import "./_cat-nav.scss"

const CatNav= function()
{

  let  categories=["Men","Women","Kids","Best Offers"];
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