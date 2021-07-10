import axios from "axios";

//base url, then the instance.get gets appended to the end of the base url ie, after the /3 below
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;