import { Link } from "react-router-dom"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);


  return (
    <div>
      <div
  className="hero min-h-210"
  style={{
    backgroundImage: "url(https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg)",
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Take advantage of the possibilities of using the telephone directory, which is always at hand
      </p>
      {isLoggedIn ? <Link className="btn btn-primary" to="/contacts">Contacts</Link> : <Link className="btn btn-primary" to="/login">Login</Link> }
    </div>
  </div>
</div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://www.linkedin.com/in/olga-usatenko/" target="_blank"> 
      <FaLinkedin className="w-7 h-7"/>
    </a>
    <a href="https://github.com/olivia-dp" target="_blank">
      <FaGithub className="w-7 h-7"/>
    </a>
  </nav>
</footer>
      </div>
  ) 
}

export default HomePage
