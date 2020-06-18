
import {SHOW_LIST_URL} from './apiUrls'
import axios from "axios";

export default axios.create({
  baseURL: SHOW_LIST_URL,
  responseType: "json"
});