import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "./AuthNav/AuthNav";
import UserMenu from "./UserMenu/UserMenu";



const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);




  return (
    <header className="p-2 bg-neutral">
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
     
    </header>
  );
};
export default AppBar;