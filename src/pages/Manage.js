import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";

function Manage(){
    const [platformData, setPlatformData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/get')
            .then(response => response.json())
            .then(data => { setPlatformData(data) })
        .catch(error => console.error("Error fetching data: ", error));
    }, [])

    return (
        <div className="container">
            <h1>Platform verwalten</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Nummer</th>
                        <th>Baumnummer</th>
                        <th>Baumumfang in cm</th>
                    </tr>
                </thead>
                <tbody>
                    {platformData.map(platform => (
                        <tr key={platform.id}>
                            <td>{platform.id}</td>
                            <td>{platform.platformName}</td>
                            <td>{platform.platformNumber}</td>
                            <td>{platform.treeNumber}</td>
                            <td>{platform.treeDiameter}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

} 
export default Manage;