import React, { useContext } from "react";
import { AuthenticationContext } from "../Authentication";

const Header = () => {
  const { user, setUser } = useContext(AuthenticationContext);
  return (
    <div>
      <h1>Username: {user.user.username}</h1>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default Header;
