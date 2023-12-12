import axios from "axios"
import {REACT_APP_API_URL} from "../const"

export const getConfig = async () => {
  const res = await axios.get(`${REACT_APP_API_URL}/payment/config`)
  return res.data
}