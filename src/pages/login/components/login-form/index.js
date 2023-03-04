import React, {useContext, useState} from 'react'
import c from './style.module.css'
import {FormikField} from "../../../../components/formik/formik-field";
import {useFormik} from "formik";
import {ButtonDefault} from "../../../../components/buttons/button-default";
import {loginUserRequest} from "../../../../actions/user.actions";
import {AuthContext} from "../../../../context/AuthContext";
import {loginSchema} from "./login.schema";
import {toast} from "react-toastify";
import {Loading} from "../../../../components/other/loading";
import jwtDecode from "jwt-decode";


const LoginForm = () => {
  const {login} = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const form = useFormik({
    initialValues: {
      login: "",
      password: ""
    },
    validationSchema: loginSchema,
    onSubmit: (values) => loginHandler(values)
  })

  const notify = text => toast(text)

  const loginHandler = async (values) => {
    setIsLoading(true)
    const data = await loginUserRequest({login: values.login, password: values.password})
    const isAdm = jwtDecode(data.accessToken).role === 'admin'

    if (data && isAdm) {
      login(data.accessToken)
    } else {
      notify("Unknown error")
    }

    setIsLoading(false)
  }

  return (
    <div className={c.wrap}>
      <div className={c.cmsMarker}>
        cms
      </div>

      <div className={c.form}>
        <div>
          <h4 className={c.title}>Name</h4>
          <FormikField form={form} name="login" placeholder="login" />
        </div>

        <div>
          <h4 className={c.title}>Password</h4>
          <FormikField form={form} type="password" name="password" placeholder="******" />
        </div>

        <ButtonDefault submit={form.submitForm} text="Login" />
      </div>
      {isLoading && <Loading />}
    </div>
  )
}


export {
  LoginForm
}