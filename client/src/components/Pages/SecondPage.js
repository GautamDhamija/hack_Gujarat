import React,{ useEffect,useContext,Fragment } from 'react'
import SelectedContext from '../../context/selected/selectedContext'
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import AuthContext from '../../context/auth/authContext'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'

function SecondPage() {
    const selected = useContext(SelectedContext)
    let {consultants,getconsultants,category} = selected
    const history = useHistory()
    const authContext = useContext(AuthContext)
    const { loginUser, error, msg, setLoading, loading, isAuthenticated,user } = authContext
    useEffect(() => {
        if (!user) {
            history.push('/loginChoice')
        }
        if (error == "Invalid Credentials") {
            alert("Invalid Creadentials")
        }

        getconsultants(category)
    }, [error, user])
    
    
    return (
        <>
        <AnimateSharedLayout>
        <div className="container" id="top">
            <div className="row">
                <div className="col-lg-12">
                    <center>
                        <span class="badge badge-dark">{category}<h4 style={{marginTop:"2%"}}>Click on Card For more info...</h4></span>
                    </center>
                </div>
            </div>
            <div className="col-lg-12" style={{marginTop:"2%"}}>
        <center>
            <motion.ul layout initial={{ borderRadius: 25 }}>
                {consultants.map(item => (
                <Item item={item} item2={user.user}/>
                ))}
            </motion.ul>
            </center>
        </div>
        </div>
        
        {/* <div className="container" id="main">
            <div className="row" style={{margin:"0% 4% 0% 4%"}}>
                
                    
                    {consultants.map((consult)=>(
                    <div className="col-lg-12">
                        <div className="card" id="each2" style={{textAlign:"left"}}>
                            <div className="row">
                                <div className="col-sm-6">
                                    
                                    <center>
                                    <div style={{textAlign:"left",margin:"4% 0 4% 10%",fontWeight:"bolder"}} >
                                    <h4>{consult.name}</h4>
                                    <h4>{consult.email}</h4>
                                    <h4>{consult.phone}</h4>
                                    <h4>{consult.qualification}</h4>
                                    <h4>{consult.location}</h4>
                                    </div>
                                    </center>
                                </div>
                                <div className="col-sm-6">
                                    <center>
                                    <img src="https://i2-prod.mirror.co.uk/incoming/article22453821.ece/ALTERNATES/s1200c/0_Charlize-Theron.jpg" style={{height:"fit",borderRadius:"50%"}}></img>
                                    </center>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    ))}
                   
                
            </div>
            
        </div> */}
        
        
        </AnimateSharedLayout>
        </>
    )
}
function Item(props) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <motion.li layout onClick={toggleOpen} >
        
            <img src="https://i2-prod.mirror.co.uk/incoming/article22453821.ece/ALTERNATES/s1200c/0_Charlize-Theron.jpg" style={{height:"150px",borderRadius:"50%",display:"inline",border:"2px solid black"}}></img>
            
                                    <h4>{props.item.name}</h4>
                                    <h4>{props.item.email}</h4>
                                    <h4>{props.item.phone}</h4>
                                    <h4>{props.item.qualification}</h4>
                                    <h4>{props.item.location}</h4>
                                    <h4>{props.item.fees}</h4>
        <AnimatePresence>{isOpen && <Content email={props.item} email2={props.item2}/>}</AnimatePresence>
      </motion.li>
    );
  }
  
  function Content(props) {
    const handleclick = async (event)=>{
        
        let formdata = {
            "by_name" : props.email2.name,
            "by_email" : props.email2.email,
            "by_number" : props.email2.phone,
            "to_name" : props.email.name,
            "to_email" : props.email.email,
            "to_number" : props.email.phone,
            "time" : "9:00 pm"
        }
        console.log(formdata);
        await axios.post('/make/request', formdata, {
            header: {
                'content-type': 'application/json'
            }
        })

            .then(res => {
                alert("Your Appointment has been booked...")
                return(<Redirect to="/confirmed/appointment/"/>)
            })
            .catch(err => {
                console.log("error...");
            })
        
    }
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button className="btn btn-lg btn-danger" onClick={handleclick} email={props.email} email2={props.email2}>Book Appointment</button>
      </motion.div>
    );
  }

  
  
  const items = [0, 1, 2,3];
  

export default SecondPage
