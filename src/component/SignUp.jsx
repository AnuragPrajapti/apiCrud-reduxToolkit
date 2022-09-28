import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Style.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useGetRegisterUserMutation } from '../redux-Toolkit/storeSlice';

const SignUp = () => {

    const [createUser , responseInfo] = useGetRegisterUserMutation()
    const [apiData, setApiData] = useState({
        email: "",
        password: "" ,
        fullName : "" ,
    });



    const handleSubmit = (e) => {
        e.preventDefault()
        createUser(apiData)
        setApiData({
            email: "",
            password: "" ,
            fullName : ""  
        })
        var list = JSON.parse(localStorage.getItem("apiData"));
        let data = list ? list : [];
        localStorage.setItem("apiData", JSON.stringify([...data , apiData]));
    }

    return (
        <div className='container'>
            <Row>
                <Col >
                    <div className="form">
                        <Form>
                            <Form.Group className='heading'>
                                <h3>Register Here!!</h3>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>FullName</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter email"
                                    value={apiData.fullName}
                                    onChange={(e) => setApiData({ ...apiData, fullName: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={apiData.email}
                                    onChange={(e) => setApiData({ ...apiData, email: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={apiData.password}
                                    onChange={(e) => setApiData({ ...apiData, password: e.target.value })}
                                />
                            </Form.Group>

                            <Button variant="primary" onClick={handleSubmit} type="submit">
                                Submit
                            </Button>
                            <p>alrady have a account ? <NavLink to='/signin' >logIn</NavLink> </p>
                        </Form>
                    </div>
                </Col>
                {/* <Col>
                    <div className="image">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                    </div>
                </Col> */}
            </Row>
        </div>
    )
}

export default SignUp;