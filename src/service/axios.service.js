import axios from "axios";
import bUrl from "../config/urls";

export const axiosService = axios.create({
    baseURL:bUrl
});