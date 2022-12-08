import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import "./About.css"
import Card from "./card"
const About = () => {
    useEffect(() => {
        aos.init({ duration: 2000 })
    }, [])

    return (
        <div >

            <div className=" d-sm-12 d-md-6 d-md-flex d-sm-block">
                <img data-aos="flip-left" src="./images/blakie.png" alt="" className=" col-6 image-fluid texer" width={'50%'} />
                <div>
                    <h2 className="pt-3">Inspiring, Transforming, and Changing lives through medical innovation.</h2>
                    <br />
                    <br />

                    <p>MEDIC is a hospital booking app that provides you access to a medical practitioner in any hospital around you. Finding your doctor can be a very difficult process given that over 50 to 100 people create cues in front of hospitals every day just to meet a doctor. Sometimes people come to the hospital for checkup but end up falling sick as a result of waiting outside under the scorching sun. We have made life easy by providing easy access to your favourite doctors from the confort of your home. Book an appoinment today and get a schedule in less than no time. Remember that you are a click away from finding your ultimate solution. </p>
                </div>



            </div>
            <br />
            <h2>Meet our team</h2>
            <div className=" d-sm-12 d-md-6 d-md-flex d-sm-block row" >

                <Card title='Dentist'
                    imageUrl='./images/picture.jpg'
                    body='Care for the health of your teeth. Brighten your smile. Make sure you grab all the opportunities around you with a breath of fresh air.' />

                <Card title=''
                    imageUrl='./images/cheerful.jpg'
                    body='Care for the health of your teeth. Brighten your smile. Make sure you grab all the opportunities around you with a breath of fresh air.'

                />

                <Card title='Dermatologist'
                    imageUrl='./images/dentist.jpg'
                    body='welcome to our page'

                />
            </div>
            <div className=" d-sm-12 d-lg-9 d-md-flex d-sm-block row" >
                <Card title='Dentist'
                    imageUrl='./images/America.jpg'
                    body='Care for the health of your teeth. Brighten your smile. Make sure you grab all the opportunities around you with a breath of fresh air.' />



                <Card title='Neurosurgeon'
                    imageUrl='./images/iso.jpg'
                    body='Always have your mind at a balance. Your mental health is a priority. Have your brain in check with us.'

                />

                <Card title='Dermatologist'
                    imageUrl='./images/pexels.webp'
                    body='Protect your physical health. Always be the one to light up the room with your glow. Find the best skin doctor for your looks.'

                />

            </div>
            <div className=" d-sm-12 d-lg-9 d-md-flex d-sm-block row " >
                <Card title='Dentist'
                    imageUrl='./images/lap.png'
                    body='Care for the health of your teeth. Brighten your smile. Make sure you grab all the opportunities around you with a breath of fresh air.' />



                <Card title='Neurosurgeon'
                    imageUrl='./images/boydoc.jpg'
                    body='Always have your mind at a balance. Your mental health is a priority. Have your brain in check with us.'

                />

                <Card title='Dermatologist'
                    imageUrl='./images/bb.jpg'
                    body='Protect your physical health. Always be the one to light up the room with your glow. Find the best skin doctor for your looks.'

                />

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
export default About