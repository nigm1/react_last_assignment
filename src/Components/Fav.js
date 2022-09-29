import React, { useEffect } from "react"
import { useSelector } from "react-redux"
export default function Fav(){
    let favlist=useSelector((state)=>state.fav)


        return(
            <>
                <div className="row d-flex align-items-center justify-content-center bg-dark">
                    {favlist.map((product)=>{
                        return(
                            <div class="card text-bg-dark col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6 col-8 m-1 p-0 d-flex flex-column align-content-end">
                                <img src={product.image} class="card-img" alt="..." /> 
                                <div class="card-img-overlay " style={{height:'fit-content',top:'unset',backgroundImage:'linear-gradient(to top, rgba(0, 0, 0, 2), transparent)'}}>
                                <h5 class="card-title text-light fw-bold ">{product.title}</h5>
                                <div className="d-flex flex-row justify-content-between"><h5 class="card-title text-light fw-bold ">{product.price} $</h5>
                                    <div className="d-flex flex-row"><h6 class="card-title text-light fw-bold pb-0">{product.rating.rate}</h6> <span class="badge ">
                                    <svg className="text-light" xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg></span></div></div>
                                </div>
                            </div>
                    )
                    })}                   
                </div>
            </>
        )
}