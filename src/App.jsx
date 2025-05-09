import React, {useState} from "react";
import BlogList from "./components/BlogList/BlogList";
import AddNewBlog from "./components/BlogList/AddNewBlog";
import { blogData } from "./data/blogData";

function App() {
  const [blogs, setBlogs] = useState(blogData);

  return (
    <div>
      <AddNewBlog setBlog={setBlogs} />
      <BlogList blogs={blogs} />
    </div>
  );
}
export default App
