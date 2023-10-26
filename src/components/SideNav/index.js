import React from 'react'
import './_side-nav.scss'
import { useSelector } from 'react-redux'
import accordionSlice from '../../store/slices/accordionSlice/accordionSlice'
const SideNav = () => {

    let accordionData= useSelector(accordionSlice.getInitialState);
  return (
    <div className='side-nav'>

        <div className='section-title'>
            <h3>Category</h3>
        </div>


        <div className='accordion'>

        {accordionData.map((eachData)=>{

 return(
         <div className='accordion-item individual-category'>
          <div className="accordion-header">
            <button id={"but"+eachData.category} className="accordion-button" data-bs-target={'#'+eachData.category} data-bs-toggle="collapse">
            <div className='category-title'>
                {eachData.category}
            </div>
            </button>
            </div>

            <div className='accordion-collapse collapse show' id={eachData.category}>

                <div className='accordion-body'>
             
                 <ul>
              {eachData.items.map((eachItem)=>{

          return <li className='sub-items'><a href='#'>{eachItem}</a></li>
            
              })}
            



                 </ul>



                </div>
            </div>

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
    </div>
  )
}

export default SideNav;