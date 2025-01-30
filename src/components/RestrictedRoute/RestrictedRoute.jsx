import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import { Navigate, useLocation } from "react-router-dom"

const RestrictedRoute = ( { children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
    return isLoggedIn ? children : <Navigate to = '/login' state={location}/> 
}

export default RestrictedRoute


