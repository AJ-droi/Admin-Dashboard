import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Team = () => {
    const [teams, setTeams] = useState([]);

    const url = "https://fakerapi.it/api/v1/persons?_quantity=10";

    useEffect(() => {
      fetch(url)
      .then(response => response.json())
      .then(user => setTeams(user.data))
    }, [])
    
  return (
    <div className='table-container'>
        <table className="table table-striped">
            <thead className="thead-dark text-white">
                <tr>
                    <th scope="col">FullName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Image</th>
                </tr>
            </thead>

            <tbody>
                {teams ? teams.map((team, idx )=> (
                    <tr key={idx}>
                        <td>{team.firstname}</td>
                        <td>{team.email}</td>
                        <td>{team.phone}</td>
                        <td>{team.gender}</td>
                        <td><img src={team.image} alt="" /></td>
                    </tr>
                ) ) : null }
            </tbody>

        </table>
        
        

    </div>
  )
}

export default Team