import './Style.css'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useGetLoginUserMutation } from '../redux-Toolkit/storeSlice';
const SignIn = () => {

    const [loginUser , responseInfo] = useGetLoginUserMutation();
    const [apiData, setApiData] = useState({
        email : "",
        password  : "" ,
    });

    
    const handleLogin = (e) => {
        e.preventDefault()
        loginUser(apiData)
        setApiData({
            email : "",
            password  : "" ,
        })
        localStorage.setItem("token",responseInfo.data.token);
    }
 
     console.log("apidaybuisdilkvbghi",responseInfo.data)


  return (
    <div>
          <div className="signInForm">
                        <Form> 
                            <Form.Group className='heading'>
                                <h3>LogIn Here!!</h3>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    value={apiData.email}
                                    onChange={(e) => setApiData({ ...apiData, email: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Password"
                                    value={apiData.password}
                                    onChange={(e) => setApiData({ ...apiData, password : e.target.value })}
                                />
                            </Form.Group>

                            <Button variant="primary" onClick={handleLogin} type="submit">
                                LogIn
                            </Button>
                            <p>alrady have a account ? <NavLink to='/' >Register</NavLink> </p>
                            <p>alrady have a account ? <NavLink to='/dashboard' >Dashboard</NavLink> </p>
                        </Form>
                    </div>
    </div>
  )
}

export default SignIn;