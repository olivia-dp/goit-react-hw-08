import { NavLink} from "react-router-dom"
import { useDispatch} from 'react-redux';
import { logOutUser} from '../../../redux/auth/operations';





const UserMenu = () => {
  
  const dispatch = useDispatch();
  
  
  return (
    <>
      <nav className="flex text-neutral-content justify-between items-center ">
         
              <div >
                <NavLink to='/' className="relative text-white font-medium transition-all duration-300 
              after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
              after:bg-white after:transition-all after:duration-300 
              hover:after:w-full hover:text-gray-300 mr-4">Home</NavLink>
                <NavLink to='/contacts' className="relative text-white font-medium transition-all duration-300 
              after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
              after:bg-white after:transition-all after:duration-300 
              hover:after:w-full hover:text-gray-300">Contacts</NavLink>
              </div>
              <button onClick={() => dispatch(logOutUser())} className="btn btn-ghost">
                  Logout
              </button>
          
      </nav>
      
    </>
  )
}

export default UserMenu
