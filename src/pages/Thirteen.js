import { NavLink, Outlet } from "react-router-dom";

function Thirteen() {
  return (
    <div className="thirteen">
      <div className="con">
        <NavLink to="/thirteen/home">Home</NavLink>
        <NavLink to="/thirteen/about">About</NavLink>
        <NavLink to="/thirteen/contact">Contact</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Thirteen;
