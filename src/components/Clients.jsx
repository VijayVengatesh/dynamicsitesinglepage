import React, { useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/bundle'
import '../css/Clients.css'
import { Pagination } from 'swiper/modules'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Button } from 'react-bootstrap'

export const Clients = () => {
  const[isEdit,setIsEdit]=useState(false);
  const[images,setImages]=useState([{img:""},{img:""},{img:""},{img:""}])
  const[clientContent,setClientContent]=useState([{review:"vijay is super hero",name:"vijay",address:"new york india"},{review:"vijay is super hero",name:"vijay",address:"new york india"},{review:"vijay is super hero",name:"vijay",address:"new york india"},{review:"vijay is super hero",name:"vijay",address:"new york india"}]);
  function saveContent(){
    setIsEdit(false)
    console.log(images)
    console.log(clientContent)
  }
  function editContent(){
    setIsEdit(true)
  }

  function imagesChange(index,field,value){
    const updatedContent=[...images];
    updatedContent[index][field]=value
    setImages(updatedContent)
  }

  function contentChange(index,field,value){
    const updatedContent=[...clientContent];
    updatedContent[index][field]=value
    setClientContent(updatedContent);
  }
  return (
    <>
    <div className="container-fluid pb-5">
        <h1 className='text-center fw-lighter '>What Our Clinets Says</h1>
        <p className='text-center pb-3'>People's Says their Throught about Works</p>

       <div className='position-relative'>
       <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{dynamicBullets:true,clickable:true}}
      modules={[Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {clientContent.map((sin,index)=>(
        <SwiperSlide className='d-flex justify-content-center pb-5' key={index}>
        <div className="card" style={{width:"50%",height:"250px"}}>
            <div className="card-body d-flex gap-3 w-100">
                {isEdit?<input type='file' onChange={(e)=>{imagesChange(index,"img",e.target.files[0])}}/>:<img src={images[index].img==""?"":URL.createObjectURL(images[index].img)} width="200px" className='p-3 rounded-5' alt="" style={{objectFit:"cover",maxWidth:"100%",maxHeight:"90%"}} />}
                <div className='d-flex align-content-between flex-wrap w-100'>
                    {isEdit?<input type='text' value={sin.review} onChange={(e)=>{contentChange(index,"review",e.target.value)}}  />:<p className='mt-2 text-wrap w-50'>{clientContent[index].review}</p>}
                    <div className='col-12 pb-5'>
                        {isEdit?<input type='text' value={sin.name} onChange={(e)=>{contentChange(index,"name",e.target.value)}} />:<span className='text-warning'>{clientContent[index].name}</span>}
                        {isEdit?<input type='text' value={sin.address} onChange={(e)=>{contentChange(index,"address",e.target.value)}} />:<p>{clientContent[index].address}</p>}
                    </div>
                </div>
            </div>
        </div>
      </SwiperSlide>
      ))}
      
    </Swiper>

    {isEdit?<button onClick={saveContent}>Save Client Content</button>:<button onClick={editContent}>Edit Clients Content</button>}
       </div>
    </div>
    </>
  )
}
