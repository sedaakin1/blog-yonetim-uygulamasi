import React, { useState } from 'react';
import BlogItem from './BlogItem';
import "./BlogList.css";

function BlogList({ blogs }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSortChange = (e) => {
    setSortKey(e.target.value);
  };

  const filteredBlogs = blogs
    .filter(blog =>
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.author.toLowerCase().includes(searchTerm) ||
      blog.content?.toLowerCase().includes(searchTerm)
    )
    .sort((a, b) => {
      if (sortKey === "author") {
        return a.author.localeCompare(b.author);
      }
      if (sortKey === "date" && a.date && b.date) {
        return new Date(b.date) - new Date(a.date); // Yeni > Eski
      }
      return 0;
    });

  return (
    <div className='blog-list'>
      <div className='blog-controls'>
        <input
          type="text"
          placeholder="Search Blogs..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select onChange={handleSortChange} value={sortKey}>
          <option value="">Sort by</option>
          <option value="date">Date</option>
          <option value="author">Author</option>
        </select>
      </div>

      <h1 className='blog-title-main'>Blog Posts</h1>

      {filteredBlogs.map((blog) => (
        <BlogItem 
          key={blog.id}
          title={blog.title}
          description={blog.description || blog.content}
          author={blog.author}
        />
      ))}
    </div>
  );
}

export default BlogList;