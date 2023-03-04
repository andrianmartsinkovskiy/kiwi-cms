import {axiosAuthorized} from "../axios";

export const getUsersRequest = async () => {
  let users = null

  try {
    const data = await axiosAuthorized.get(
      process.env.REACT_APP_API_URL
      + 'api/user/allUsers'
    )

    users = data.data.users
  } catch (error) {
    console.warn(error)
  }

  return users
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