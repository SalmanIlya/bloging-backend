import axios from "axios"
import Link from "next/link"
import Image from 'next/image'
import { useEffect, useState } from "react"
import {FaCommentAlt } from "react-icons/fa"
import {AiFillLike} from "react-icons/ai"
import {IoMdShareAlt} from "react-icons/io"
function HomePage() {
  const [state,setState]=useState([])
  useEffect(()=>{
    const fatchdata=async ()=>{
     await axios.get("https://api.escuelajs.co/api/v1/products").then((res)=>{
      setState(res.data)
    }).catch((err)=>{console.log("error");})
    }
    fatchdata()
  },[])
    return ( <div className="">
      
<div className="relative">
 
<img src="/image/4.jpg" width={1000} className="w-full " height={1} />
<div className="flex  justify-center items-center  ">
  <h1 className="absolute  text-white text-4xl top-52 ">well come to my web</h1>

  </div>
</div>

<div className="">

       <h1 className="text-center text-4xl font-bold my-20"> My Bloging web </h1>
       <div className="flex flex-row flex-wrap justify-center items-center">
      {
        state.map((item)=>{
          return (
            <Link href={`/post/${item.id}`} class="max-w-sm rounded overflow-hidden shadow-lg m-5 flex flex-col justify-center items-center relative">
            <img class="  h-60 w-60  " src={item.images[2]} alt="Sunset in the mountains"/>
            <img className="absolute rounded-full w-20 h-20 mt-5 " src="/image/1.jpg" width={1} height={1} />
            <div class="px-6 py-4 flex flex-col justify-center items-center pt-5">
            <spam className="text-gray-500 mt-3 ">Created add 1:01:pm</spam>

              <div class="font-bold text-xl mb-2 ">The Coldest Sunset</div>
              {/* <p class="text-gray-700 text-base">
               {item.description.slice(0,150)}...
              </p> */}
              <div className="flex flex-row justify-between items-center w-40 mt-5 ">

              <AiFillLike className=" text-red-500 text-4xl  border-2 p-1 border-bla hover:bg-red-500 hover:text-white
              "/>
              <FaCommentAlt className=" text-green-500 hover:bg-green-500 hover:text-white text-4xl  border-2 p-1 border-bla
              " />
              <IoMdShareAlt  className="text-4xl text-blue-500 hover:text-white hover:bg-blue-500  border-2 p-1 border-bla
              " />
              </div>
            </div>
            
          </Link>
          )
        })
      }
       </div></div>


    </div>)
  }
  
  export default HomePage