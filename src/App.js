import React from 'react'
import {useAuth} from "./hooks/auth.hooks";
import {AuthContext} from "./context/AuthContext";
import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./routes";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {token, logout, login, role} = useAuth(AuthContext)
  const routes = useRoutes(role)


  return (
    <AuthContext.Provider value={{
      token, logout, login, role
    }}>
      <Router>
        {role && routes}
      </Router>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
      />
    </AuthContext.Provider>
  );
}

export default App;
