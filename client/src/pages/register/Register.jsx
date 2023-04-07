import axios from "axios";
import { useRef } from "react";
import { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { register } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./register.scss";

export default function Register() {

  // const history = useHistory();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailDone, setEmailDone] = useState(false);


  const handleStart = () => {
    // console.log("handleStart pressed", emailRef.current.value)
    // setEmail(emailRef.current.value);
    setEmailDone(true)

  };

  const handleFinish = async (e) => {
    e.preventDefault();

    console.log("handleFinishRegister pressed. password is: ", password, "username is:", username);

    const userData = {'email':email, 'username':username, 'password':password};
    register(userData, authContext.dispatch,()=>navigate("/login"))
    setEmailDone(false);
  };
  const handleLoginButton = (e) => {
    e.preventDefault()
    console.log("handleLoginButton pressed")
    // history.push("/login");
    
    navigate("/login")
  }

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value)
  // }

  return (
    <div className="register">
      <p>sadasdasds</p>
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton" onClick={handleLoginButton}>Sign Inn</button>
         
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!emailDone ? (
          <div className="input">
            <input type="email" placeholder="email address" onChange={(e)=>{setEmail(e.target.value)}}/>
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
            
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}} />
            <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
