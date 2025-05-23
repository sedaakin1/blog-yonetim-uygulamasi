import React, {useState} from "react";
import BlogList from "./components/BlogList/BlogList";
import AddNewBlog from "./components/BlogList/AddNewBlog";
import { blogData } from "./data/blogData";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState(blogData);

  return (
     <>
      <header className="app-header">
        <h1>Blog Management App</h1>
      </header>
      <div className="app-container">
        <AddNewBlog setBlog={setBlogs} />
        <BlogList blogs={blogs} />
      </div>
    </>
  );
}
export default App
