import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "./AuthNav/AuthNav";
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';



const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);




  return (
    <header className="flex text-neutral-content justify-between items-center p-2 bg-neutral ">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
     
    </header>
  );
};
export default AppBar;

