
import { useDispatch, useSelector} from 'react-redux';
import { logOutUser } from '../../../redux/auth/operations';
import { selectIsLoggedIn, selectUser } from "../../../redux/auth/selectors";






const UserMenu = () => {
  
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <>
         
        {isLoggedIn && <h2>Welcome, {user.name}!</h2>}
              <button onClick={() => dispatch(logOutUser())} className="btn btn-ghost">
                  Logout
              </button>
      
    </>
  )
}

export default UserMenu
