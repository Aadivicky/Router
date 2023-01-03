import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="lin">
            <Link to="/">Home</Link>
          </li>
          <li className="lin">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="lin">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;