import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./SingUp.css";

const SingUP = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error,setError] = useState('')

    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event =>{
        confirmPassword(event.target.value)
    }
    const handleCreateUser = event =>{
        event.preventDefault()
        if(password !== confirmPassword){
            setError("Your two passwords did't match")
        }
    }
  return (
<div className="form-container">
<div className="">
  <h1 className="form-title">SignUp</h1>
  <form onSubmit={handleCreateUser}>
  <div className="input-group">
  <label htmlFor="email">Email</label>
    <input  onBlur={handleEmailBlur} type="email" name="email" id="" required/>
  </div>

    <div className="input-group">
      <label htmlFor="Password">Password</label>
      <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
    </div>
    <div className="input-group">
      <label htmlFor="confirm-Password">Confirm Password</label>
      <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" required/>
    </div>
    <p style={{color:'red'}}>{error}</p>
    <input className="form-submit" type="submit" value="SignUp" />
  </form>
  <p>
  Already Have an account ?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
  </p>
</div>
</div>
  );
};

export default SingUP;
