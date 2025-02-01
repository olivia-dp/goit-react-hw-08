import { NavLink} from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux';
import { logOutUser} from '../../../redux/auth/operations';
import { selectIsLoggedIn, selectUser } from "../../../redux/auth/selectors";




const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <>
      <nav >
         
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/contacts'>Contacts</NavLink>
              <button onClick={() => dispatch(logOutUser())}>
                  Logout
              </button>
          
      </nav>
      {isLoggedIn && <h2>WELCOME, {user.name}</h2>}
    </>
  )
}

export default UserMenu
