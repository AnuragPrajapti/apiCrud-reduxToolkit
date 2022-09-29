import React, { useState, useEffect } from 'react'
import { useGetAddUserMutation, useGetAllPostQuery, useGetDeleteUserMutation, useGetEditUserMutation, useGetUpdateUserMutation } from '../redux-Toolkit/storeSlice'
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Dashboard.css'
const Dashboard = () => {

  const { data, isLoading, error } = useGetAllPostQuery();
  const [addUser, responseInfo] = useGetAddUserMutation();
  const [deleteUser, deleteResponse] = useGetDeleteUserMutation();
  const [editUser, editResponse] = useGetEditUserMutation();
  const [updateUser, updateResponse] = useGetUpdateUserMutation();


  console.log('editResponse', editResponse);

  const [addData, setAddData] = useState({
    name: "",
    age: "",
    city: ""
  });

  const handelsubmit = (e) => {
    e.preventDefault();
      addUser(addData);
    setAddData({
      name: "",
      age: "",
      city: ""
    })
  }

  const handelUpdate = (e) => {
    e.preventDefault();
    if (editResponse.data._id) {
      updateUser(addData)
    } else {
        console.log("id dos not found")
    }
    setAddData({
      name: "",
      age: "",
      city: ""
    })
  }

  const handleDelete = (id) => {
    console.log(8888, id)
    deleteUser(id)
  }

  const handleEdit = (id) => {
    console.log("editData", id);
    editUser(id)
  }

  useEffect(() => {
    const data = editResponse?.data;
    console.log(2222, data)
    setAddData({
      name: data?.name,
      age: data?.age,
      city: data?.city,
      id: data?._id
    })
  }, [editResponse])

  return (
    
    
    <div className='container deshboard' >
        <h3>Dashboard</h3>
        <button className='addUserbtn btn btn-primary' data-toggle="modal" data-target="#exampleModal" >AddUser</button>
        <table class="table table-dark">
          <thead>
            <tr>
              <th>User _ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">City</th>
              <th scope='col'>Edit</th>
              <th scope='col'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((item, index) =>
                <tr key={index}>
                  <th>{index}</th>
                  {/* <td>{item._id}</td> */}
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                  <td>
                    <button
                      className='btn btn-warning'
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => handleEdit(item._id)}
                    >Edit
                    </button></td>
                  <td ><button className='btn btn-danger' onClick={() => handleDelete(item._id)} >Delete</button></td>
                </tr>)
            }
          </tbody>
        </table>
        <p>alrady have a account ? <NavLink to='/' >Register</NavLink> </p>
        <div>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <Form>
                    <Form.Group className='heading'>
                      {
                        editResponse?.data?._id ?  <h3>Update User!!!</h3> : <h3>AddUser Here!!</h3>
                      }
                      
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Enter Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={addData.name}
                        onChange={(e) => setAddData({ ...addData, name: e.target.value })}
                      />Indore
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Enter Age</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Age"
                        value={addData.age}
                        onChange={(e) => setAddData({ ...addData, age: e.target.value })}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter City"
                        value={addData.city}
                        onChange={(e) => setAddData({ ...addData, city: e.target.value })}
                      />
                    </Form.Group>
                    {/* <Button variant="primary" onClick={handleUpdate} type="submit">
                    Update User
                  </Button> */}Indore
                  </Form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  {
                    editResponse?.data?._id ? <button type="submit" class="btn btn-primary" onClick={handelUpdate} data-dismiss="modal" >Update User</button> :
                      <button type="submit" class="btn btn-primary" onClick={handelsubmit}>Add User</button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Dashboard;