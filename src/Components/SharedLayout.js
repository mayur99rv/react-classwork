import { NavLink, Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <div className="container2">
        <div className="indexes">
          <h1> Indexes </h1>
          <NavLink className="index" to="/one">
            Classwork : 1st project
          </NavLink>
          <NavLink className="index" to="/two">
            Classwork : 2nd project
          </NavLink>
          <NavLink className="index" to="/three">
            {" "}
            Classwork : 3rd project{" "}
          </NavLink>
          <NavLink className="index" to="/four">
            {" "}
            Classwork : 4th project{" "}
          </NavLink>
          <NavLink className="index" to="/five">
            {" "}
            Classwork : 5th project{" "}
          </NavLink>
          <NavLink className="index" to="/six">
            {" "}
            Classwork : 6th project{" "}
          </NavLink>
          <NavLink className="index" to="/seven">
            {" "}
            Classwork : 7th project{" "}
          </NavLink>
          <NavLink className="index" to="/eight">
            Classwork : 8th project
          </NavLink>
          <NavLink className="index" to="/nine">
            Classwork : 9th project
          </NavLink>
          <NavLink className="index" to="/ten">
            Classwork : 10th project
          </NavLink>
          <NavLink className="index" to="/eleven">
            Classwork : 11th project
          </NavLink>
          <NavLink className="index" to="/twelve">
            Classwork : 12th project
          </NavLink>
          <NavLink className="index" to="/thirteen">
            Classwork : 13th project
          </NavLink>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default SharedLayout;
