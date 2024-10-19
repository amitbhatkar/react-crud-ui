import React, { useEffect, useState } from "react";
import axios from "axios";

 
function Home() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    console.log("code with amit");
    loadUsers();
  },[5]);

  const loadUsers= async()=>{
    const result = await axios.get("http://localhost:9090/emp");
    setUsers(result.data);
  };

  return (
    <div className="H_main">
      <div className="py-4 px-5">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">USER ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE NO</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((user) =>{
                return(
                  <tr>
                  <th scope="row" key={user.id}> {user.id} </th>
                  <td> {user.name} </td>
                  <td> {user.email} </td>
                  <td> {user.phone} </td>
                </tr>
                )
              })
            }
             
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
