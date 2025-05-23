import "./BlogItem.css"

function BlogItem(props){
    const{ title, description, author, date, image} = props;

    return (
        <div>
          
        <div className='blog-item'>
            {image && (
              <div className='blog-image-wrapper'>
              <img src={image} alt="Blog Görseli" className="blog-image" />
            </div>
      )}
            <h2 className='blog-title'>{title}</h2>
            <p className='blog-author'>By: {author}</p>
            <p className='blog-date'>Date: {date}</p>
            <p className='blog-content'>{description}</p>
            
        </div>
        </div>
      )
}


export default BlogItem