import React from 'react'
import "./BlogItem.css"

function BlogItem(props){
    const{ title, description, author} = props;

    return (
        <div>
          
        <div className='blog-item'>
            <h2 className='blog-title'>{title}</h2>
            <p className='blog-author'>By: {author}</p>
            <p className='blog-content'>{description}</p>
            
        </div>
        </div>
      )
}


export default BlogItem