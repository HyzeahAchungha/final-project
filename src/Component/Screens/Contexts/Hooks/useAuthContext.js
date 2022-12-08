import { useContext } from "react"
import { AuthContext } from "../Authcontext"
export const useAuthContext = ()=>{
    const context = useContext(AuthContext)
    if (!context) {
        throw Error('userAuthContext must be used inside an AuthContextProvider')
    }
    return context
}