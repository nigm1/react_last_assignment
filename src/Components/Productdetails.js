import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Productdetails(){
    let data=useParams()
    let [product,setproduct]=useState({})

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${data.id}`)
        .then((productdata)=>{setproduct(productdata.data)}).catch((err)=>{console.log(err)})
    },[])
    
    return(
        <>
            <div class="card mb-3 bg-dark">
            <img src={product.image} class="card-img-top w-50" alt="..." />
            <div class="card-body">
                <h1 class="card-title text-light">{product.title}</h1>
                <h4 class="card-text text-light">{product.price} $</h4>
                <h5 class="card-text text-light">{product.category}</h5>
                <h5 class="card-text text-light">{product.description}</h5>
                
                <div className="d-flex "><h5 class="card-title text-light fw-bold ">{}</h5>
                <svg className="text-light" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg></div>
            </div>
            </div>

        </>
    )
}