import  {useState} from 'react'
import BlogInput from './BlogInput';
import Button from "../UI/Button";
import "./AddNewBlog.css"

const blogInputs = [
  {
    label: "Title",
    type: "text",
    name: "title",
  },
  {
    label: "Author",
    type: "text",
    name: "author",
  },
  {
    label: "Content",
    type:  "text",
    name: "content",
  },
  {
    label: "Date",
    type: "date",
    name: "date",
  },
];

const AddNewBlog = ({setBlog}) => {
  const [newBlog, setNewBlog] = useState({
    title:"",
    author:"",
    content:"",
    date:"",
    image: null,
  });

  function handleChange({ target: { name, value, files, type } }) {
  if (type === "file") {
    setNewBlog({ ...newBlog, [name]: files[0] });
  } else {
    setNewBlog({ ...newBlog, [name]: value });
  }
}

  function handleSubmit(event){
    event.preventDefault();

    for (const input of blogInputs) {
  if (!newBlog[input.name].trim()) {
    alert(`${input.label} alanı boş bırakılamaz!`);
    return;
  }
}


    const updatedBlog = {
      id: Math.random(),
      title: newBlog.title.trim(),
      author: newBlog.author.trim(),
      content: newBlog.content.trim(),
      date: newBlog.date.trim(),
      image: newBlog.image ? URL.createObjectURL(newBlog.image) : null,
    };

    setBlog((prevState) => [updatedBlog, ...prevState]);

    setNewBlog({
      title: "",
      author: "",
      content: "",
      date:"",
      image: null,
    });
  }

  return (
    <form className='add-product-form' onSubmit={handleSubmit}>
    {blogInputs.map((input,index) =>(
      <BlogInput 
      key={index} {...input}
      value={newBlog[input.name]} 
      handleChange={handleChange}
      />
    ))}
    <div className="blog-input">
    <label>Image</label>
    <input
      type="file"
      name="image"
      accept="image/*"
      onChange={handleChange}
    />
  </div>
    
    
    <Button color="success">Add Post</Button>
    </form>
  )
}

export default AddNewBlog