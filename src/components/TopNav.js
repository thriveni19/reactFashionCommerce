
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  './_top-nav.scss'

const TopNav = function()
{


    return(
        <div className='header bg-dark'>
        <div className='topnavrow row'>
          <div className='brand my-1'>
            <h1> eStore </h1>
          </div>
          <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
            <div className='dropdown m-0 p-0'>
              <select className='select-btn w-100 p-0 m-0'>
                <option> Men </option>
                <option> Women </option>
                <option> Kids </option>
              </select>
            </div>
            <input className='form-control   ' placeholder='Search...'/>
            <button> <FontAwesomeIcon icon='fa fa-search'/> </button>
          </div>
          <div className="login-container p-0">
          <FontAwesomeIcon icon="fa fa-user-circle"/>
            <h5> <a href='#'> Login</a></h5> / <h5><a href='#'>Register</a></h5>
          </div>
          <div className='cart-wishlist'>
            <ul className="p-0">
 
           <li className="list-icon"><FontAwesomeIcon icon="fa fa-heart"/> </li>
           <li className="list-icon" > <FontAwesomeIcon icon="fa fa-shopping-cart"/> </li>
           

            </ul>

          </div>
        
        </div>
      </div>

    )




}

export default TopNav;