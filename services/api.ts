import axios from "axios";

export const baseAPI = axios.create({
    baseURL: 'https://www.dbooks.org/api'
})