import React from 'react'
import Header from '../common/Header'
import {  blogsData } from '../Data/blogs'
import { Link } from 'react-router-dom'


export default function Blog() {
    let allBlogs=blogsData.map((v,i)=>{
        return(
            <div className='blogItems' key={i}>
                <h3>{v.title}</h3>
                <p>
                    {v.body}
                </p>
                <button ><Link to={`/blog/${v.id}`}> Read more </Link> </button>
            </div>
        )
    })
  return (
    <div>
      <Header/>
    <h1>Blog  Page</h1>
    
    <div className='container'>
       {allBlogs}

    </div>
    </div>
  )
}
