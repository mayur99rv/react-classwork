import { NavLink, Outlet } from "react-router-dom";

function Thirteen() {
  return (
    <>
      {/* // eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        href="https://github.com/mayur99rv/react-classwork/blob/master/src/pages/Thirteen.js"
        target="_blank"
        rel="noreferrer"
      >
        Code
      </a>
      <div className="thirteen">
        <div className="con">
          <NavLink to="/thirteen/home">Home</NavLink>
          <NavLink to="/thirteen/about">About</NavLink>
          <NavLink to="/thirteen/contact">Contact</NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Thirteen;
