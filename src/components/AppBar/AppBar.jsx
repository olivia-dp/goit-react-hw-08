import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { LogOutUser} from '../../redux/auth/operations';
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";


const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header>
      {isLoggedIn && <h2>WELCOME, {user.name}</h2>}
      <nav >
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>
        {isLoggedIn ? (
          <button onClick={() => dispatch(LogOutUser())}>
            Logout
          </button>
        ) : (
          <>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};
export default AppBar;