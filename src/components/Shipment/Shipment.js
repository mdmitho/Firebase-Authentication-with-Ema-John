import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
 
const handleNameBlur = event=>{
    setName(event.target.value)
}

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handleAddressdBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhonedBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();
      
        
        
    }



    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Shipping INformation</h2>
            <form onSubmit={handleCreateUser}>
                 <div className="input-group">
                    <label htmlFor="email">Your Name</label>
                    <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
                </div>
                 <div className="input-group">
                    <label htmlFor="email">Your Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Address</label>
                    <input onBlur={handleAddressdBlur} type="text" name="Address" id=""  required/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Phone Number </label>
                    <input onBlur={handlePhonedBlur} type="text" name="phone-number" id="" />
                </div>
                <p style={{color: 'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="Add Shipping"/>
            </form>
        </div>
    </div>
    );
};

export default Shipment;