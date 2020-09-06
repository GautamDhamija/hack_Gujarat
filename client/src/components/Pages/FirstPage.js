import React,{Fragment, useState, useEffect} from 'react'
import { useContext } from 'react'
import SelectedContext from '../../context/selected/selectedContext'
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext'

function FirstPage(props) {
    const history = useHistory()
    const selected = useContext(SelectedContext)
    let {category,setcategory,getconsultants} = selected
    const authContext = useContext(AuthContext)
    const { loginUser, error, msg, setLoading, loading, isAuthenticated,user } = authContext
    useEffect(() => {
        if (!user) {
            history.push('/loginChoice')
        }
        if (error == "Invalid Credentials") {
            alert("Invalid Creadentials")
        }
    }, [error, user])
    const handleClick = (event)=>{
        
        if(event.target.name!==undefined){
            let type = event.target.name
            console.log(type);
            setcategory(type);
            history.push('/specific/category')
        }
    }

    return (
        <>
        <div className="container" id="top">
            <div className="row">
                <div className="col-lg-12">
                    <center>
                        <span class="badge badge-dark">Select Your Consultant</span>
                    </center>
                </div>
            </div>
        </div>
        
        <div className="container" id="main">
            <div className="row">
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="Doctor">
                        <img src="https://i.pinimg.com/originals/26/4e/30/264e30439c42387c1e3c48d2d038429d.png" name="Doctor"></img>
                        <h3 name="Doctor">Doctors</h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="astrologer">
                            <img src="https://spiritualsadhana.com/wp-content/uploads/2016/02/book-a-pandit-online-500x500.png" name="astrologer"></img>
                            <h3 name="astrologer">Astrologers</h3>
                        </div>
                    </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="dietician">
                        <img src="https://static.vecteezy.com/system/resources/previews/000/179/510/original/cheerful-nutritionist-vector-illustration.jpg"  name="dietician"></img>
                        <h3  name="dietician">Dietetian</h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each" name="Psychologist">
                        <img src="https://bigpicturezen.files.wordpress.com/2020/02/clipart-doctor-counselling.png" name="Psychologist"></img>
                        <h3 name="Psychologist">Psychologist</h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each" name="stock marketers">
                        <img src="https://www.netclipart.com/pp/m/114-1142543_free-stock-market-clipart-download-free-clip-art.png" name="stock marketers"></img>
                        <h3 name="stock marketers">Stock Marketers</h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each" name="visa consultant">
                            <img src="https://www.itl.cat/pngfile/big/318-3186746_canada-flag-hd.jpg" name="visa consultant"></img>
                            <h3 name="visa consultant">Visa Consultant</h3>
                        </div>
                    </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="career">
                        <img name="career" src="https://png.pngtree.com/png-vector/20190119/ourmid/pngtree-cartoon-cartoon-occupation-business-business-career-png-image_473126.jpg"></img>
                        <h3 name="career">Career </h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="fitness trainer">
                        <img name="fitness trainer" src="https://static.vecteezy.com/system/resources/previews/000/177/970/original/vector-professional-fitness-trainer-illustration.jpg"></img>
                        <h3 name="fitness trainer">Fitness Trainer</h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="finance">
                        <img name="finance" src="https://previews.123rf.com/images/prettyvectors/prettyvectors1805/prettyvectors180500031/101170424-rich-wealthy-happy-smiling-businessman-worker-businessman-sitting-on-a-pile-stack-heap-of-money-and-.jpg"></img>
                        <h3 name="finance">Finance</h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each" name="Beautician">
                            <img name="Beautician" src="https://etimg.etb2bimg.com/photo/75991439.cms"></img>
                            <h3 name="Beautician">Beauticians</h3>
                        </div>
                    </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="architect">
                        <img name="architect" src="https://i.pinimg.com/736x/e7/cc/8c/e7cc8c2313db63e83feb928f5a3f92d0.jpg"></img>

                        <h3 name="architect">Architects</h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="electrician">
                        <img name="electrician" src="https://previews.123rf.com/images/blamb/blamb1209/blamb120900004/15494052-a-mad-scientist-is-excited-with-electricity.jpg"></img>
                        <h3 name="electrician">Electrician</h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="plumber">
                        <img name="plumber" src="https://i.pinimg.com/736x/15/c3/7d/15c37d3606eff2bce61317ff57966204.jpg"></img>
                        <h3 name="plumber">Plumbers</h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="domestic help">
                            <img name="domestic help" src="https://cdn.clipart.email/4f8a8f258f611a3215025bd1650e120e_housekeeping-clipart-png_650-1094.jpeg"></img>
                            <h3 name="domestic help">Domestic Help</h3>
                        </div>
                    </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="property dealer">
                        <img name="property dealer" src="https://cdn.clipart.email/5978091b2e17c15c39136500aa5ac9fa_mansion-clipart-vila-picture-119304-mansion-clipart-vila_612-490.jpeg"></img>
                        <h3 name="property dealer">Property</h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each" name="dentist">
                        <img name="dentist" src="https://i.pinimg.com/originals/45/67/95/456795033917a07bfad54f4a0b1195e4.jpg"></img>
                        <h3 name="dentist">Dentists</h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each" name="nannies">
                        <img name="nannies" src="https://webstockreview.net/images/babysitting-clipart-professional-2.jpg"></img>
                        <h3 name="nannies">Nannies</h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="home food">
                            <img name="home food" src="https://www.pngitem.com/pimgs/m/95-955280_italy-clipart-home-cooked-food-male-chef-icon.png"></img>
                            <h3 name="home food">Home Food</h3>
                        </div>
                    </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="home tutor">
                        <img name="home tutor" src="https://edugeton.com/wp-content/uploads/2019/07/English-Tutor1.jpg"></img>
                        <h3 name="home tutor">Home Tutors</h3>
                    </div>
                </div>
                <div className="col-lg-3" onClick={handleClick}>
                    <div className="card" id="each"  name="masseur">
                        <img name="masseur" src="https://data.ac-illust.com/data/thumbnails/9c/9cc9b48789c892154c852e2e7c0f9b5e_w.jpeg"></img>
                        <h3 name="masseur">Masseurs</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FirstPage
