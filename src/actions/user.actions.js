import {axiosAuthorized} from "../axios";

export const getUsersRequest = async (formData) => {
  let users = null

  try {
    const data = await axiosAuthorized.get(
      process.env.REACT_APP_API_URL
      + 'api/user/getUsers'
    )

    users = data.data.users
  } catch (error) {
    console.warn(error)
  }

  return users
}

export const getUserDataRequest = async (id) => {
  let user = null

  try {
    const data = await axiosAuthorized.get(
      process.env.REACT_APP_API_URL
      + 'api/user/getUser/' + id
    )

    user = data.data.user
  } catch (error) {
    console.warn(error)
  }

  return user
}

export const registerUserRequest = async (formData) => {
  let user = null

  try {
    const data = await axiosAuthorized.post(
      process.env.REACT_APP_API_URL + 'api/auth/register',
      formData
    )

    user = data
  } catch (error) {
    console.warn(error)
  }

  return user
}

export const loginUserRequest = async ({login, password}) => {
  let user = null

  try {
    const data = await axiosAuthorized.post(
      process.env.REACT_APP_API_URL + 'api/auth/login',
      {login, password}
    )

    user = data.data
  } catch (error) {
    console.warn(error)
  }

  return user
}