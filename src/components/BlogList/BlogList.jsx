import React from 'react';
// import {blogData} from "../../data/blogData";
import BlogItem from './BlogItem';
import "./BlogList.css"

function BlogList({blogs}) {
  return (
    <div className='blog-list'>
    
       <h1>Blog Posts</h1> 
  
      {blogs.map((blog) =>
      <BlogItem 
       key={blog.id}
       title={blog.title}
       description={blog.description}
       author={blog.author}
      />
      )}
    </div>
  )
}

export default BlogList