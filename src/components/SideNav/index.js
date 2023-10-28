import React, { useEffect,useState } from 'react'
import './_side-nav.scss'
import { useDispatch, useSelector } from 'react-redux'
import accordionSlice from '../../Redux/Accordion/accordionSlice'
import { getCategories } from '../../Redux/Category/actions'
import { filterProducts } from '../../Redux/Product/productSlice'
const SideNav = () => {

    let accordionData= useSelector(state=>state.categoryReducer.categories);
    let  fetchedProductData= useSelector(state=>state.productReducer)
    let [products,setProducts] = useState();
    const dispatch= useDispatch();

    useEffect(()=>{

         dispatch(getCategories());


    },[]);


    useEffect(()=>{


        setProducts(fetchedProductData.products)

   },[fetchedProductData.status]);


    const filterData=(selectedCategory) =>
    {
        const payload ={selectedCategory,products};
        dispatch(filterProducts(payload))
        console.log(products);
    }

  return (
    <div className='side-nav'>

        <div className='section-title'>
            <h3>Category</h3>
        </div>


        <div className='accordion my-3'>

        {accordionData.map((eachData)=>{

if(eachData.parent_category_id==null)
 return(
         <div className='accordion-item individual-category'>
          <div className="accordion-header">
            <button id={"but"+eachData.category} className="accordion-button" data-bs-target={'#'+eachData.category} data-bs-toggle="collapse">
            <div className='category-title'>
                {eachData.category}
            </div>
            </button>
            </div>

            {           (accordionData.filter((eachSubCategory)=>eachData.id==eachSubCategory.parent_category_id).length>0) && <div className='accordion-collapse collapse show' id={eachData.category}>

                <div className='accordion-body'>
             
                 <ul>
              {
            
              accordionData.filter((eachSubCategory)=>eachData.id==eachSubCategory.parent_category_id).map((eachItem)=>{

          return <li className='sub-items'><a href='#' onClick={()=>{filterData(eachItem)}}>{eachItem.category}</a></li>
            
              })}
            



                 </ul>



                </div>
            </div>}

            </div> 

        )



        })}
           {/*
            <div className='accordion-item'>
            <div className='category-title'>
                Women
            </div>
            </div>
            <div className='accordion-item'>
            <div className='category-title'>
                Kids
            </div>
            </div>
           */}



        </div>

         <div className='section-title '>

            <h3> Filter by Price </h3>

         </div>

    </div>
  )
}

export default SideNav;