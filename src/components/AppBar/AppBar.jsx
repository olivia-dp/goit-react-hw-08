import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import AuthNav from "./AuthNav/AuthNav";
import UserMenu from "./UserMenu/UserMenu";



const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header>
      {isLoggedIn && <h2>WELCOME, {user.name}</h2>}


       {isLoggedIn ? <UserMenu /> : <AuthNav />}
 
    </header>
  );
};
export default AppBar;