import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );


  const login = (details) => {
    axios
      .post("http://localhost:5000/api/auth/login", details)
      .then((res) => {
        setCurrentUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        Swal.fire({
          text: "Invalid Credentials",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "oK",
        });
      });
  };


  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        login
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
