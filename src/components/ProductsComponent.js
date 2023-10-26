
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_products.scss';
import { useSelector } from 'react-redux';
import productSlice from '../store/slices/productSlice/productSlice';
const Products=()=>{

    let productData= useSelector(productSlice.getInitialState);
    
    return(
 
        <div className='product-container'>
    {productData.map((eachProduct,index)=>{

            
return(
          <div className='mx-5 p-3 product-card'>
  
            <div className='product-image-container'>

                 <img src={require('../assets/images/shop/'+  eachProduct.img)}/>


            </div>


            <div className='product-info'>
              <h5> <a href='#'>{eachProduct.pName}</a></h5>
              <p className='product-price'>${eachProduct.price}</p>
              <div className='product-rating'>
                  <FontAwesomeIcon  icon='fa fa-star' className='rating' />
                  <FontAwesomeIcon  icon='fa fa-star' className='rating' />
                  <FontAwesomeIcon  icon='fa fa-star' className='rating' />
               </div>

            </div>



          </div>)
   
       })}  
        </div>


    )



}

export default Products;