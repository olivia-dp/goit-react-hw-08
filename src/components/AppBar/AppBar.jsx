import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import AuthNav from "./AuthNav/AuthNav";
import UserMenu from "./UserMenu/UserMenu";



const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);




  return (
    <header className="navbar bg-base-100 shadow-sm">
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
     
    </header>
  );
};
export default AppBar;