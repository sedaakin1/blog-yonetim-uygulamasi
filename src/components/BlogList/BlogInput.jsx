
const BlogInput = ({ label, type, name, value, handleChange }) => {
  return (
    <div className="blog-input">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default BlogInput;