import React, {useContext, useEffect, useState} from 'react'
import c from './style.module.css'
import {Wrap} from "../../../../components/wrappers/wrap";
import {BiLogOut} from "react-icons/bi";
import {AuthContext} from "../../../../context/AuthContext";
import {getUserDataRequest} from "../../../../actions/user.actions";
import {toast} from "react-toastify";
import {Loading} from "../../../../components/other/loading";
import jwtDecode from "jwt-decode";
import {downloadFileHelper} from "../../../../helpers/download-file-helper";

const HomePreview  = () => {
  const {logout, token} = useContext(AuthContext)
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getUserDataHandler()
  }, [])
  const notify = text => toast(text)
  const getUserDataHandler = async () => {
    setIsLoading(true)
    const {userId} = jwtDecode(token)
    const data = await getUserDataRequest(userId)
    console.log(data, 'data')
    if (data) {
      setUserData(data)
      setIsLoading(false)
    } else {
      notify("Unknown error")
    }

  }

  const downloadFileHandler = () => {
    downloadFileHelper(userData.file.path, userData.file.name)
  }

  if (isLoading) return <Loading />

  return (
    <div className={c.wrap}>
      <div className={c.header}>
        <Wrap>
          <div className={c.headerWrap}>
            <h2 className={c.name}>{userData.login}</h2>

            <BiLogOut className={c.logout} onClick={() => logout()} />
          </div>
        </Wrap>
      </div>

      <Wrap>
        <div className={c.content}>
          <h5>Your file:</h5>
          <div onClick={downloadFileHandler} className={c.file}>{userData.file.name}</div>
        </div>
      </Wrap>
    </div>
  )
}

export {
  HomePreview
}