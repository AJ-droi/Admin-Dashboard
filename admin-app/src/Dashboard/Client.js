import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Client = () => {
    const [clients, setClients] = useState([]);

    const url = "https://fakerapi.it/api/v1/companies?_quantity=5";

    useEffect(() => {
      fetch(url)
      .then(response => response.json())
      .then(user => setClients(user.data))
    }, [])
  return (
    <div className='client-container'>
           <table className="table table-striped">
            <thead className="thead-dark text-white">
                <tr>
                    <th scope="col">FullName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Country</th>
                    <th scope="col">Image</th>
                </tr>
            </thead>

            <tbody>
                {clients ? clients.map((client, idx )=> (
                    <tr key={idx}>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                        <td>{client.phone}</td>
                        <td>{client.country}</td>
                        <td><img src={client.image} alt="" /></td>
                    </tr>
                ) ) : null }
            </tbody>

        </table>
    </div>
  )
}

export default Client