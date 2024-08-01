import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckSession = () => {
    const navigate = useNavigate()
    // check from local storage if the following variables are available 
    const lab_name = localStorage.getItem("lab_name")
    const lab_id = localStorage.getItem("lab_id")
    const access_token= localStorage.getItem("access_token")

    // if they are not present , redirect user to signin
    useEffect( ()=>{
       //    check if they are empty 
      if(!lab_name && !lab_id && !access_token){
    // claer the local storage 
         localStorage.clear()
         return navigate("/signin") //got to signin
        }
    },[lab_name, lab_id, access_token, navigate])

    //return your variables
    return{lab_name, lab_id, access_token};
    

};
export default CheckSession