import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


function ItemDetail(props){
    const location = useLocation();
    const searchParameters = new URLSearchParams(location.search);
    const id = searchParameters.get('id');
    const [itemDetail, setItemDetail] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (id) {
            console.log("hans")
            fetch(`http://localhost:5001/item?id=${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was: ${response.status}, ${response.statusText}`);
                    }
                    return response.json(); // Ensure this line returns the parsed JSON
                })
                .then(data => setItemDetail(data))
                .catch(error => setError(error.toString()));
        } else {
            setError('No ID provided in query string');
        }
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!itemDetail) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            <h1>Item Detail</h1>
            <p>horray</p>
            <p>{itemDetail.id}</p>
        </div>
    );

}

export default ItemDetail;