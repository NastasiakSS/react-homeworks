import axios from "axios";
import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const postsService ={
    getByUserId:(id)=>axiosService.get(`${urls.posts}?userId=${id}`)
}