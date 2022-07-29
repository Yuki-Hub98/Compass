import axios from "axios";
import { View } from "react-native";

const api = axios.create({
    baseURL: "https://shrouded-shelf-01513.herokuapp.com",


})

export default api;