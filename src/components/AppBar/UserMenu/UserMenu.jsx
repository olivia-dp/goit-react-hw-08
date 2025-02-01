import { NavLink} from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux';
import { logOutUser} from '../../../redux/auth/operations';
import { selectIsLoggedIn, selectUser } from "../../../redux/auth/selectors";




const UserMenu = () => {
  
  const dispatch = useDispatch();
  
  
  return (
    <>
      <nav >
         
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/contacts'>Contacts</NavLink>
              <button onClick={() => dispatch(logOutUser())}>
                  Logout
              </button>
          
      </nav>
      
    </>
  )
}

export default UserMenu
