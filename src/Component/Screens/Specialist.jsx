import "./Specialist.css"

import 'react-calendar/dist/Calendar.css';

import { useEffect } from "react";
import { useState } from "react"
import Aos from "aos"

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import enUS from 'date-fns/locale/en-US';
registerLocale('enUS', enUS)

const Specialist = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  // const [date, setDate] = useState(new Date());

  // const [time, setTime] = useState([])
  const [server, setServer] = useState('')
  useEffect(() => {
    getServer()
  }, [])
  const onChange = (date) => {
    setDate(date.target.value);
    setDefaultLocale('enUS');
  }
  const onSubmit = event => {
    event.preventDefault();
    console.log(date)
  }
  const [date, setDate] = useState('')
  const [time, setTime] = useState(new Date().toLocaleTimeString())


  const getServer = async () => {
    const server = await axios.get(`http://localhost:4000/get-server`)
    setServer(server.data)
  }

  const submit = async () => {
    const server = await axios.post(`http://localhost:4000/add-Server`, { date: date, time: time })
    setServer([server.data, ...server,])
    // .then(({data})=>{
    //   console.log(data)
    // }).catch(error=>{
    //   if(error.response){
    //     console.log(error.response.status)
    //   }
    // })
    const isDateAndTime=await server.findOne({date,time})
	if(isDateAndTime){
		const  error=new Error("please the date and the time already exist ,please choice another one ")
		error.status=500
		return (error)
	}
  }

  const deleteServer = async (id) => {
    const server = await axios.delete(`http://localhost:4000/delete-server/${id}`)
    const newList = server.filter(server => server._id !== id)
    setServer(newList)

  }
  const handleTime = e => {
    const value = e.target.value
    console.log(value)
    setTime(value)
  }
  const handleDate = e => {
    const value = e.target.value
    setDate(value)
    console.log(value)
  }



  return (
    <div>

      <div className="  d-sm-12 d-md-6 d-md-flex d-sm-block">
        <img data-aos="flip-right" src="./images/online.png" alt="" width={'50%'} className="col-6 image-fluid njama" />
        <br />
        <p>Sellect the time and date you will like to see your doctors.</p>
      </div>
      <h1 className='start'>Choose date and time </h1>
      <div className='app col-8 d-sm-12  d-sm-block  text-center'>


        <div className="calendarApp mt-5 col-6 d-sm-12 d-sm-block">
          <form onSubmit={onSubmit}>
            <div className="input-group mb-2">


              <input type="date" name="date" id="date" onChange={handleDate} />
              <input type="time" name="time" id="time" onChange={handleTime} />
              <br />
              <button onClick={submit} className="btn btn-outline-primary " id="button-addon2">submit</button>
              <button onClick={() => deleteServer(server._id)}>delete</button>
            </div>





          </form>

          <a href="./Appointment">
            <button className="btn-primary priority">Book Now</button>

          </a>

        </div>




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

  );


}
export default Specialist
