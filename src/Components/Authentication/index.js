import React, { useState, createContext } from "react";
import Login from "../Login";

const AuthenticationContext = createContext(null);
const Authentication = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      {user ? children : <Login />}
    </AuthenticationContext.Provider>
  );
};

export default Authentication;
export { AuthenticationContext };
