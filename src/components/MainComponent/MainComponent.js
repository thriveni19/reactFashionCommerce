import React,{ useState } from 'react'
import SideNav from '../SideNav'
import Products from '../ProductsComponent/ProductsComponent'

function MainComponent() {
  let [childProductData, setToProductData] = useState('')
 const inputdataFromSideNav = (child) =>{
  console.log(child)
  setToProductData(child)
  }
  return (
    <div className='container-fluid'>
  
  <div className='row'>
      <div className='col-lg-2 col-md-3 col-sm-4'>
    <SideNav getDataFromChild={inputdataFromSideNav} />
    </div>
    <div className='col-lg-10 col-md-9 col-sm-8'>
    <Products productOrder={childProductData} />
    </div>


    </div>
    </div>

  )
}

export default MainComponent