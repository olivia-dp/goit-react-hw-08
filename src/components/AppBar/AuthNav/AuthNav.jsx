import { NavLink} from "react-router-dom"

const AuthNav = () => {
  return (
    <nav className="flex text-neutral-content justify-between items-center ">
    <NavLink to='/' className="ml-4 relative text-white font-medium transition-all duration-300 
              after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
              after:bg-white after:transition-all after:duration-300 
              hover:after:w-full hover:text-gray-300 mr-4">Home</NavLink>
           <div>
              <NavLink to='/register'className="btn btn-ghost mr-4">Register</NavLink>
              <NavLink to='/login' className="btn btn-ghost ">Login</NavLink>
           </div>
          </nav>
  )
}

export default AuthNav
