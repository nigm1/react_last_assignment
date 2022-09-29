import axios from "axios";
import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Home(){

    let [categories,setcategories]=useState([])
    useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories').
    then((cat)=>setcategories(cat.data)).catch(err=>console.log(err))
    },[])

    return(
        <>
           {categories.map((cat)=>{
           return(
            <button className="bg-dark rounded-3 p-3 m-5"> <Link to={`/Categoryproducts/${cat}`} className="text-decoration-none text-light">
                {cat}
            </Link></button>
           )
           })}
        </>
    )
}