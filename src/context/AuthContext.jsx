import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("currentUser")
      ? { email: localStorage.getItem("currentUser") }
      : null,
  );

  //signup function
  function signUp(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser = { email, password };

    if (users.find((u) => u.email === email)) {
      return { success: false, error: "Email already exists" };
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", email);
    setUser({ email });
    return { success: true };
  }

  //login function
  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (!user) {
      return { success: false, error: "Invalid email or password" };
    }
    localStorage.setItem("currentUser", email);
    setUser({ email });
    return { success: true };
  }

  //logout function
  function logout(params) {
    localStorage.removeItem("currentUser");
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ signUp, user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}