import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from "react";

function Add() {
  const platformName = useRef(null);
  const platformNumber = useRef(null);
  const treeNumber = useRef(null);
  const treeDiameter = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    

    const formData = {
      material_id: 1,
      platformName: platformName.current.value,
      platformNumber: platformNumber.current.value,
      treeNumber: treeNumber.current.value,
      treeDiameter: treeDiameter.current.value,
    };
  
    try{
      const response =  fetch('http://localhost:5001/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if(!response === 200){
        throw new Error("Fehlerhafte übermittlung")
      }
      alert("wohhoo it worked");
    } catch(Error){
      alert("Fehler bei der Übermittlung");
    }

  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-2">
          <label htmlFor="platformName" className="form-label">Platformname</label>
          <input type="text" id="platformName" className="form-control" required ref={platformName} />
        </div>
        <div className="col-md-2">
          <label htmlFor="platformNumber" className="form-label">Platformnummer</label>
          <input type="number" id="platformNumber" className="form-control" required ref={platformNumber} />
        </div>
        <div className="col-md-2">
          <label htmlFor="treeNumber" className="form-label">Baumnummer</label>
          <input type="number" id="treeNumber" className="form-control" required ref={treeNumber} />
        </div>
        <div className="col-md-2">
          <label htmlFor="treeDiameter" className="form-label">Baum Umfang (in cm)</label>
          <input type="number" id="treeDiameter" className="form-control" ref={treeDiameter} />
        </div>
        <div className="col-md-2 align-self-end">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
