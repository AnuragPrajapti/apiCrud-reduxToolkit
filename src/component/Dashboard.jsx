import React from 'react'
import { useGetAllPostQuery } from '../redux-Toolkit/storeSlice';

const Dashboard = () => {
   const  [userData,responseInfo] = useGetAllPostQuery();

    // const userList = localStorage;

   console.log("getAll post",responseInfo)
  return (
    <div>
        <h3>Dashboard</h3>
         
    </div>
  )
}

export default Dashboard;