import axios from "axios"

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token")

  return axios.create({
    baseURL: 'https://voicer-lambda-app.herokuapp.com',
    headers: {
      authorization: token,
    },
  })
}
