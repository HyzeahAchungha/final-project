import { useState } from "react"
import "./Signup.css";
import { useSignup } from "./useSignup";
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isloading } = useSignup()


    const handleSubmit = async (event) => {

        event.preventDefault();
        console.log(email, password);
        
        await signup(email, password)

        const data = {
            email: email,
            password: password

        }

    }
    const changeEmail = (event) => {
        setEmail(event.target.value);
    };
    const changePassword = (event) => {
        setPassword(event.target.value);
    };
    return (
        <div>
            <form className="sinup" onSubmit={handleSubmit}>
                <h4>sign up</h4>
                <label >Email:</label>
                <input type="email" onChange={changeEmail} />

                <label >Password:</label>
                <input type="password" onChange={changePassword} />
                <br />
                <br />
                <button disabled={isloading}>sign up</button>
                {error && <div className="error"> {error}</div>}
            </form>
        </div>
    )
}
export default Signup