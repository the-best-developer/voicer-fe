import axios from "axios"
import DataContext from "../../context/DataContext"

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token")
  const { url } = useContext(DataContext)

  return axios.create({
    baseURL: url,
    headers: {
      authorization: token,
    },
  })
}
