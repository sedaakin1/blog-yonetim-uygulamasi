import React, {useState} from 'react'

const blogInputs = [
  {
    label: "Title",
    type: "text",
    name: "title",
    placeholder: "Lütfen title giriniz"
  },
  {
    label: "Author",
    type: "text",
    name: "author",
  placeholder: "Lütfen yazar adı giriniz"
  },
  {
    label: "Content",
    type:  "text",
    name: "content",
    placeholder: "Lütfen içerik kısmını doldurunuz"
  },
];

const AddNewBlog = ({setBlog}) => {
  const [newBlog, setNewBlog] = useState({
    title:"",
    author:"",
    content:"",
  });

  function handleChange({target: {name, value}}){
    setNewBlog({...newBlog, [name]: value});
  }

  function handleSubmit(event){
    event.preventDefault();

    const isFormValid = Object.values(newBlog).every(
      (value)=> value.trim() !== ""
    );

    if (!isFormValid) {
      alert("Lütfen tüm alanları doldurunuz");
      return;
    }

    const updateNewBlog = {
      
    }

  }



  return (
    <div>AddNewBlog</div>
  )
}

export default AddNewBlog