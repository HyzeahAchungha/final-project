
import "./Appointment.css"
import { useState, useEffect, useRef } from "react"
import axios from "axios";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
const Appointment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [server, setServer] = useState('')

  useEffect(() => {
    getServer()
  }, [])


  const submitHandeler = async (event) => {
    event.preventDefault();

    console.log('form submitted ✅');


    const data = {
      name: name,
      email: email,
      gender: gender,
      age: age,

    };
  };
  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changeAge = (event) => {
    setAge(event.target.value);
  };
  const changeGender = (event) => {
    setGender(event.target.value);
  };
  const getServer = async () => {
    const server = await axios.get(`http://localhost:4000/get-server`)
    setServer(server.data)
  }

  const submit = async () => {
    const server = await axios.post(`http://localhost:4000/add-Server`, { name, email, gender, age })
    setServer([server.data, ...server,])
  }

  const deleteServer = async (id) => {
    const server = await axios.delete(`http://localhost:4000/delete-server/${id}`)
    const newList = server.filter(server => server._id !== id)
    setServer(newList)
  }

  // const changePassword = (event) => {
  //   setPassword(event.target.value);
  // };
  // const changeconfirmPassword = (event) => {
  //   setConfirmPassword(event.target.value);
  // };

  return (

    <div >
      <div className="  col-5 d-sm-12 d-sm-block text-center d-md-6 d-md-flex ">
        <form className="like col-6 d-sm-12 d-sm-block " action="" onSubmit={submitHandeler} >
          <p> Your Name
            <br />
            <input type="name" onChange={changeName} placeholder="Name" /></p>
          <br />
          <p> Your email
            <br />
            <input type="email" onChange={changeEmail} placeholder="Email" /></p>
          <br />
          <p> Your age
            <br />
            <input type="number" onChange={changeAge} placeholder="Age" /></p>
          <br />
          <p> Your gender
            <br />
            <input type="text" onChange={changeGender} placeholder="Gender" /></p>
          <br />
          <br />
          <button className="submit btn-primary" onClick={submit}>submit</button>
        </form>

      </div>

      <footer className="d-sm-12 d-md-6 d-md-flex d-sm-block smooth">

        <div className="col-4 ">
          <img className="pt-2" src="./images/logo.png" alt="" width={"50%"} height={'80%'} />
          <p className="col-10 sam">Inspiring, Transforming, and Changing lives through medical innovation.</p>
        </div>

        <div className="col-4  d-sm-12 d-md-6  d-sm-block green ">
          <h5 className="mt-3">About Company</h5>

          <div className="col-5 function ">
            <div><a href="About">About</a>
            </div>
            <div><a href="Specialist">Specialist</a></div>
            <div><a href="Appointment">Appointment</a></div>
          </div>

          <img src="./images/download.png" alt="" width={"20rem"} height={'20rem'} className=" m-3 ml-3" />
          <div><img src="./images/instagram.jfif" alt="" width={"20rem"} height={'20rem'} className="m-3 m-3 ml-3" /></div>
          <div>
            <img src="./images/twiter.png" alt="" className="m-3 m-3 ml-3" width={"20rem"} height={'20rem'} />

          </div>





        </div>
        <div className="col-3 sung">
          <h5 className="canter">Contact Us</h5>
          <div className="d-flex"> <img src="./images/location.png" alt="" width={"20rem"} height={'20rem'} className="claseone  ml-3 m-3" />
            <p className=" m-2 text-start seven mr-5"> Buea Town</p>
          </div>

          <div className="d-flex"> <img src="./images/blue.png" alt="" width={"20rem"} height={'20rem'} className="five m-3 ml-3 m-3" />
            <p className=" m-2 text-start seven mr-5">Mon-Fri: 8.00am 6pm </p>
          </div>
          <br />
          <div className="  d-flex ">
            <img src="./images/phone.png" alt="" width={'20rem'} height={'20rem'} className="m-3 forty ml-3 m-3" />
            <p className=" m-2 text-start seven mr-5"> (+237)678-471-601  </p></div>
          <div className="d-flex">
            <img src="./images/email.jfif" alt="" width={'20rem'} height={'20rem'} className="m-3 m-3 ml-3" />
            <p className="m-2 text-start seven mr-5 ">info@medic.com</p>
          </div>

        </div>
      </footer>

    </div>



  )
}
export default Appointment
