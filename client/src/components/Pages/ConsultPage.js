import React,{Fragment, useState, useEffect} from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext'
import RequestContext from '../../context/request/requestContext'

function FirstPage(props) {
    const history = useHistory()
    const authContext = useContext(AuthContext)
    const { loginUser, error, msg, setLoading, loading, isAuthenticated, user } = authContext

    const requestContext = useContext(RequestContext)
    const { getrequestsconsult , requests} = requestContext 
    useEffect(() => {
        if (!user) {
            history.push('/loginChoice')
        }
        if (error == "Invalid Credentials") {
            alert("Invalid Creadentials")
        }
        if(user){
            const {consultant} = user
            const {email} = consultant
            console.log(email);
            getrequestsconsult(email)
        }

    }, [error, user])
    
    const handleclick = ()=>{
        alert("Your appointment has been confirmed with the user...")
    }
    return (
        <>
        <div className="container" id="main" style={{border:"2px solid black"}}>
            <div className="row">
            {requests.map((request)=>(
                <div className="col-lg-6">
                    <div className="card" id="each"  name="Doctor" style={{textAlign:"left"}}>
                        <h6>Name :  {request.by_name}</h6>
                        <h6>Email :   {request.by_email}</h6>
                        <h6>Contact :   {request.by_number}</h6>
                        <h6>Time :   {request.time}</h6>
                    </div>
                    <button className="btn btn-lg btn-success" onClick={handleclick}>Confim Appointment</button>
                </div>
            ))}
                
            </div>
        </div>

        </>
      
    )
}

export default FirstPage
