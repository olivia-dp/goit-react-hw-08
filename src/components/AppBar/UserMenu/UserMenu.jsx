import { NavLink} from "react-router-dom"
import { useDispatch} from 'react-redux';
import { logOutUser} from '../../../redux/auth/operations';




const UserMenu = () => {

  const dispatch = useDispatch();
  
  return (
    <nav >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
            <button onClick={() => dispatch(logOutUser())}>
                Logout
            </button>
        
          </nav>
  )
}

export default UserMenu
