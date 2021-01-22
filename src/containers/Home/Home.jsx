import React, { useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {

    const [users, setUsers] = useState([
       {
            name: "Biggus Dickus",
            email: "bdick@gmail.com"
            
       }
    ]);

    useEffect (() => {
axios.get("https://randomuser.me/api/?results=20&inc=login,name,phone,email,picture&nat=us").then(response =>{
console.log(response.data);
setUsers(response.data.results);
});
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <h1 className="text-center">Welcome to Our User Directory Page.</h1>
                </div>

            </div>
            <div className="row">

            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
      {users.map((user) => (
        <tr>
      <th scope="row">1</th>
      <td>{user.name}</td>
      <td>Otto</td>
      <td>{user.email}</td>
    </tr>

      ))}
    
    </tbody>
</table>

            </div>
            </div>
    );
};

export default Home;