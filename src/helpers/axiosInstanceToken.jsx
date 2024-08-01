import axios from "axios";
// retrieve accs token fro local storage
const access_token = localStorage.getItem("access_token");
// console.log(access_token)
const axiosInstanceToken = axios.create({
    baseURL : "https://advance.pythonanywhere.com/api",
    timeout: 20000,
    headers : {
        //incase you have access token its here
    "Content-Type":"application/json",
    "Authorization":`Bearer ${access_token}`
    },

});

export default axiosInstanceToken