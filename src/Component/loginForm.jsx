import { useLogin } from "./useLogin"
import { useState } from "react"
import "./login.css"

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {Login, error, isloading } = useLogin()


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);

    await Login(email, password)



    const data = {

      email: email,
      password: password

    };
  };


  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <h4>log in</h4>
        <br />
        <label >Email:</label>
        <br />
        <input type="email" onChange={changeEmail} />
        <br />

        <label >Password:</label>
        <br />
        <input type="password" onChange={changePassword} />
        <br />
        <br />
        <button className="vo" disabled={isloading} >Login</button>
        {error && <div className="error"> {error}</div>}
      </form>
    </div>
  )
}

export default Login