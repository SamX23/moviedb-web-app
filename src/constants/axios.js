import axios from "axios";
import { URL } from "./environtment";

const instance = axios.create({
  baseURL: URL,
});

export default instance;
