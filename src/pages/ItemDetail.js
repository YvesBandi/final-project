import React, { useState, useEffect } from "react";


function ItemDetail(props){
    const [itemDetail, setItemDetail] = useState([])
    useEffect(() =>{
        fetch(`http://localhost/get/${props.match.params.id}`)
        .then(response => response.json())
        .then(data => {setItemDetail(data)})
    .catch(error => console.error("Error fetching data: ", error));


        

    })

}

export default ItemDetail;