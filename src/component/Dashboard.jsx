import React, { useState, useEffect } from 'react'
import { useGetAddUserMutation, useGetAllPostQuery, useGetDeleteUserMutation, useGetEditUserMutation } from '../redux-Toolkit/storeSlice'
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Dashboard = () => {

  const { data, isLoading, error } = useGetAllPostQuery();
  const [addUser, responseInfo] = useGetAddUserMutation();
  const [deleteUser, deleteResponse] = useGetDeleteUserMutation();
  const [editUser, editResponse] = useGetEditUserMutation();



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
    })
  }, [editResponse])


  const handleUpdate = () =>{

  }

  return (
    <div>
      <h3 align="center">Dashboard</h3>
      <button className='btn btn-dark' data-toggle="modal" data-target="#exampleModal" >AddUser</button>
      <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <Form>
                  <Form.Group className='heading'>
                    <h3>Register Here!!</h3>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={addData.name}
                      onChange={(e) => setAddData({ ...addData, name: e.target.value })}
                    />
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
                  <Button variant="primary" onClick={handleUpdate} type="submit">
                    Update User
                  </Button>
                </Form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={handelsubmit} >Add User</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
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
                {/* <th scope="row">{index}</th> */}
                <td>{item._id}</td>
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
    </div>
  )
}

export default Dashboard;