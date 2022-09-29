import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add_to_favourite } from "../Store/Actions";

export default function Product(){
    let [producstlist,setproductslist]=useState([])

    let fav=useSelector((state)=>state.fav)
    let dispatch=useDispatch();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((product)=>{setproductslist(product.data)
        console.log(product.data);}).catch((err)=>{console.log(err)})
    },[])
    let add_to_fav=(x)=>{
        dispatch(add_to_favourite(x))
    }

    return(
        <>
        <div className="row d-flex align-items-center justify-content-center bg-dark m-0" style={{width:'100vw'}}>
            {producstlist.map((product)=>{
                return(
                    <div class="card text-bg-dark col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-8 m-1 p-0 d-flex flex-column align-content-end">
                     <button type="button" class="btn btn-primary position-absolute top-0 end-0 m-2 $zindex-tooltip bg-white rounded-circle border-0" onClick={()=>{add_to_fav(product)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg></button>
                    <Link to={`/Productdetails/${product.id}`} className="text-decoration-none ">
                        <img src={product.image} class="card-img" alt="..." /> 
                        <div class="card-img-overlay " style={{height:'fit-content',top:'unset',backgroundImage:'linear-gradient(to top, rgba(0, 0, 0, 2), transparent)'}}>
                        <h5 class="card-title text-light fw-bold ">{product.title}</h5>
                        <div className="d-flex flex-row justify-content-between"><h5 class="card-title text-light fw-bold ">{product.price} $</h5>
                            <div className="d-flex flex-row"><h6 class="card-title text-light fw-bold pb-0">{product.rating.rate}</h6> <span class="badge ">
                            <svg className="text-light" xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg></span></div></div>
                        </div>
                    </Link>
                    </div>
                    
                )
            })}
        </div>
        </>
    )
}