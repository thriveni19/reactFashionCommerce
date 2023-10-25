
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_products.scss';

const Products=()=>{

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