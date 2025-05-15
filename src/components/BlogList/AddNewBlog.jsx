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
  }
];

const AddNewBlog = ({setBlog}) => {
  const [newBlog, setNewBlog] = useState({
    title:"",
    author:"",
    content:"",
    date:"",
  });

  function handleChange({target: {name, value}}){
    setNewBlog({...newBlog, [name]: value});
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
      title: newBlog.title,
      author: newBlog.author,
      content: newBlog.content,
      date: newBlog.date,
    };

    setBlog((prevState) => [updatedBlog, ...prevState]);

    setNewBlog({
      title: "",
      author: "",
      content: "",
      date:"",
    });
  }

  return (
    <form className='add-product-form' 
    onSubmit={handleSubmit}>
    {blogInputs.map((input,index) =>(
      <BlogInput key={index} {...input}
      value={newBlog[input.name]} 
      handleChange={handleChange}/>
    ))}
    <Button color="success">Add Post</Button>
    </form>
  )
}

export default AddNewBlog