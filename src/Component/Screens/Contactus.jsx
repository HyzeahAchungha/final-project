import "./Contactus.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
const ContactUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [sendmessage, setSendMessage] = useState("");
  const [serverList, setServerList] = useState('')
  useEffect(() => {
    getServer()
  }, [])

  const submitHandeler = (event) => {
    event.preventDefault();
    console.log('form submitted ✅');


    const data = {
      name: name,
      email: email,
      subject: subject,
      sendmessage: sendmessage
    };
  };
  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changesubject = (event) => {
    setSubject(event.target.value);
  };
  const changesendMessage = (event) => {
    setSendMessage(event.target.value);
  };
  const getServer = async () => {
    const server = await axios.get(`http://localhost:4000/get-server`)
    setServerList(server.data)
  }

  const submit = async () => {
    const server = await axios.post(`http://localhost:4000/add-Server`, { name, sendmessage, subject, email })
    setServerList([server.data, ...serverList,])
  }

  const deleteServer = async (id) => {
    const server = await axios.delete(`http://localhost:4000/delete-server/${id}`)
    const newList = serverList.filter(server => server._id !== id)
    setServerList(newList)
  }



  return (

    <div className="over" >
      <div data-aos="fade-down" className="run ">
        <h2 data-aos="fade-in" className=" posture ">CONTACT US</h2>
      </div>
      <div className="d-sm-12 d-md-6 d-md-flex d-sm-block  ">

        <div className=" col-6">
          <img src="./images/lap.png" alt="" width="90%" />
        </div>

        <div data-aos="fade-left" className="col-4 phone ">


          <p className="p-5 "
          > Sometimes people come to the hospital for checkup but end up falling sick as a result of waiting outside under the scorching sun.
            We have made life easy by providing easy access to your favourite doctors from the confort of your home. Book an appoinment today and get a schedule in less than no time.
            Remember that you are a click away from finding your ultimate solution.
          </p>
        </div>
      </div>
      <div className=" d-sm-12 d-md-6 d-md-flex d-sm-block pt-3  text-center lolipo">

        <form action="" onSubmit={submitHandeler} className=" col-6 d-sm-12 d-sm-block former ">
          <p>Your name
            <br />
            <input type=" name" onChange={changeName} placeholder="Name" />
          </p>
          <br />
          <p>Your email
            <br />
            <input type="email" onChange={changeEmail} placeholder="Email" />
          </p>
          <br />
          <p>Subject
            <br />
            <input type="subject" onChange={changesubject} placeholder="Subject" />
          </p>
          <br />
          <p>Send message
            <br />
            <textarea onChange={changesendMessage} id="" cols="25" rows="5" />

          </p>
        </form>

        <div data-aos="" className="col-3 d-sm-12 d-sm-block pt-3 pre">
          <p>For every appointment that you book there are always doctors avialable. There are equally booking
            for emergency cases.Feel free to book for a premuim where you will not
            only book from home but attended to at home. Life become simply and
            happier with the right knowledge fill in the form and let us know
            how we can make your life better. Your health is your wealth.</p>
        </div>
      </div>
      < button className="subling text-center btn-primary " onClick={submit}>Send</button>
      {/* {serverList.map((server, index) => {
                        return (
                            <div  >
                                <h3>{server.sendmessage}</h3>
                                <h3>{server.name}</h3>
                                <h3>{server.email}</h3>
                                <h3>{server.subject}</h3>
                                
                                <button onClick={() => deleteServer(server._id)}>cancel</button>
                                
                            </div>
                        )
                    })} */}
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
          <div><img src="./images/instagram.jfif" alt="" width={"20rem"} height={'20rem'} className="m-3 m-3 ml-3" />
          </div>

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
export default ContactUs