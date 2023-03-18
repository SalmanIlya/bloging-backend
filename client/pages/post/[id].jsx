import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
export default function Post (){
    const router = useRouter()
    const { id } = router.query
    const [state,setState]=useState({})
    useEffect(()=>{
axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then((res)=>{
    setState(res.data)
    // console.log(res.data);
}).catch((err)=>{
    console.log("error :",err);
})
    },[id])
    console.log("state :",state);
    return (
        <>
        <h1> {state.title}</h1>
        <img src={state.images} alt="" />
        <img src={state.images} alt="" />
        <img src={state.images} alt="" />
        </>
    )
}