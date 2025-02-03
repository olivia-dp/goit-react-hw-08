import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
       <nav >
          <NavLink to='/' className="relative text-white font-medium transition-all duration-300 
              after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
              after:bg-white after:transition-all after:duration-300 
              hover:after:w-full hover:text-gray-300 mr-4">Home</NavLink>
                <NavLink to='/contacts' className="relative text-white font-medium transition-all duration-300 
              after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
              after:bg-white after:transition-all after:duration-300 
              hover:after:w-full hover:text-gray-300">Contacts</NavLink>
      </nav>
  )
}

export default Navigation