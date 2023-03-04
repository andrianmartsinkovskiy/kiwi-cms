import React, {useContext, useEffect, useRef, useState} from 'react'
import c from './style.module.css'
import {Wrap} from "../../../../components/wrappers/wrap";
import {BiLogOut} from "react-icons/bi";
import {AuthContext} from "../../../../context/AuthContext";
import {getUsersRequest} from "../../../../actions/user.actions";
import {toast} from "react-toastify";
import {Loading} from "../../../../components/other/loading";
import {downloadFileHelper} from "../../../../helpers/download-file-helper";
import {ButtonDefault} from "../../../../components/buttons/button-default";
import { CSVLink} from "react-csv";

const HomePreview  = () => {
  const {logout} = useContext(AuthContext)
  const [usersData, setUsersData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [csvData, setCsvData] = useState([])
  const csvRef = useRef()


  const notify = text => toast(text)

  useEffect(() => {
    getUsersHandler()
  } ,[])

  const getUsersHandler = async () => {
    setIsLoading(true)
    const data = await getUsersRequest()

    if (data) {
      setUsersData(data)
      setIsLoading(false)
    } else {
      notify("Unknown error")
    }
  }

  useEffect(() => {
    if(!csvData.length && !!csvRef) return
    csvRef.current.link.click()
  }, [csvData])

  const downloadFileHandler = (file) => {
    downloadFileHelper(file.path, file.name)
  }

  const createCsvTable = () => {
    const tableData = usersData.map((user) => {
      return {
        id: user.id,
        name: user.name,
        file: user.file.name
      }
    })
    setCsvData(tableData)
  }

  if (isLoading) return <Loading />

  return (
    <div className={c.wrap}>
      <div className={c.csvLink}>
        <CSVLink filename='kiwi-users-table' ref={csvRef} data={csvData} />
      </div>
      <div className={c.header}>
        <Wrap>
          <div className={c.headerWrap}>
            <h2 className={c.name}>Kiwi-CMS</h2>

            <BiLogOut className={c.logout} onClick={() => logout()} />
          </div>
        </Wrap>
      </div>

      <Wrap>
        <div className={c.pageHeader}>
          <h3 className={c.pageTitle}>
            Users List
          </h3>

          <div className={c.tableDownload}>
            <ButtonDefault type="active" submit={createCsvTable} text="Download Table" />
          </div>
        </div>

        <div className={c.content}>
          {
            usersData.map((user) => (
              <div className={c.user} key={user.id}>
                <div className={c.id}>
                  {user.id}
                </div>
                <div className={c.name}>
                  {user.name}
                </div>
                <div className={c.file}>
                  <span>{user.file.name}</span>
                  <ButtonDefault text="Download File" submit={() => downloadFileHandler(user.file)} />
                </div>
              </div>
            ))
          }
        </div>
      </Wrap>
    </div>
  )
}

export {
  HomePreview
}