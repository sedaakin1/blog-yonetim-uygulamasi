import React from 'react';
import {blogData} from "../../data/blogData";
import BlogItem from './BlogItem';

function BlogList() {
  return (
    <div className='blog-list'>
      {blogData.map((blog) =>
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