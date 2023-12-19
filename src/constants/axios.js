import axios from "axios";
import { URL as baseURL } from "./tmdb";

const instance = axios.create({
  baseURL,
});

export default instance;
