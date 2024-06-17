import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../common/Header';
import { blogsData } from '../Data/blogs';

export default function Blogdetails() {
    let uselocation = useLocation();   // help to get url data
      console.log(uselocation.pathname.split('/')[2]);
      let currentId=uselocation.pathname.split('/')[2]
      let currentData=blogsData.filter((v)=>v.id==currentId)[0]
      console.log(currentData)
  return (
    <div>
      <Header/>
      <h1>{currentData.title}</h1>
    </div>
  )
}
