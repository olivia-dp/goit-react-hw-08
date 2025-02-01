import { Link } from "react-router-dom"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div>
      <div
  class="hero min-h-screen"
  style={{
    backgroundImage: "url(https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg)",
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            {isLoggedIn && <h2>WELCOME, {user.name}</h2>}
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      {isLoggedIn ? <Link className="btn btn-primary" link to="/contacts">Контакты</Link> : <Link className="btn btn-primary" link to="/login">Вход</Link> }
    </div>
  </div>
</div>
      <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside class="grid-flow-col items-center">
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://www.linkedin.com/in/olga-usatenko/" target="_blank"> 
      <FaLinkedin />
    </a>
    <a href="https://www.linkedin.com/in/olga-usatenko/" target="_blank">
      <FaGithub />
    </a>
  </nav>
</footer>
      </div>
  ) 
}

export default HomePage
