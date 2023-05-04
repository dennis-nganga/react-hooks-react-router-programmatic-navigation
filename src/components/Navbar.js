import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const history = useHistory();

  function handleLogout() {
    setIsLoggedIn(false);
    history.push("/login");
  }

  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
      )}
    </div>
  );
}

export default Navbar;
