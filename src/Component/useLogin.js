import { useState } from "react";
 import { useAuthContext } from "./Screens/Contexts/Hooks/useAuthContext";
import axios from "axios";


export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isloading, setIloading] = useState(null)
    const { dispatch } = useAuthContext()

    const Login = async (email, password) => {
        setIloading(true)
        setError(null)

        const response = await axios({
            method: 'POST',
            url: `http://localhost:4000/server/server/login`,
            data: {
                email,
                password
            }
        });
        console.log(response.data);

        const info = await response.data;


        if (!info) {
            setIloading(false)
            setError(info.error)
        }
        if (info) {
            // the user to local storage
            localStorage.setItem('user', JSON.stringify(info))

            // update the AuthContent
            dispatch(
                {
             type:"LOGIN", payload:response    
                }
            )
            setIloading(false)
        }
    }
    return { Login, isloading, error }

}