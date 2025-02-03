import { NavLink} from "react-router-dom"

const AuthNav = () => {
  return (
    <nav className="flex text-neutral-content justify-between items-center ">
           <div>
              <NavLink to='/register'className="btn btn-ghost mr-4">Register</NavLink>
              <NavLink to='/login' className="btn btn-ghost ">Login</NavLink>
           </div>
          </nav>
  )
}

export default AuthNav
