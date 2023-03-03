import React from 'react'
import {Wrap} from "../../components/wrappers/wrap";
import {ToggleAuth} from "../../components/other/toggle-auth";
import {LoginForm} from "./components/login-form";


const LoginPage = () => {

  return (
    <Wrap>
      <ToggleAuth />
      <LoginForm />
    </Wrap>
  )
}


export {
  LoginPage
}