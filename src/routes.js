import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import {APPRoutes} from "./const/app-routes";
import {LoginPage} from "./pages/login";
import {HomePage} from "./pages/home";

const useRoutes = (role) => {

  if (role === 'guest') {
    return (
      <div>
        <Routes>
          <Route exact path={APPRoutes.login} element={<LoginPage/>} />

          <Route
            path="*"
            element={<Navigate to={APPRoutes.login} />}
          />
        </Routes>
      </div>
    )
  }

  return (
    <div>
      <Routes>
        <Route exact path={APPRoutes.home} element={<HomePage/>} />

        <Route
          path="*"
          element={<Navigate to={APPRoutes.home} />}
        />
      </Routes>
    </div>
  )
}

export {useRoutes}
