import React, { useState, useEffect } from "react";
import axios from "axios";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/Blogs/Blogs_view")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/Blogs/create", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        setBlogs([...blogs, response.data]);
        setFormData({ title: "", description: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">Blogs</h2>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-300 bg-opacity-40 rounded-lg p-4 border border-gray-500"
          >
            <h3 className="text-lg font-medium">{blog.title}</h3>
            <p className="text-sm">{blog.description}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-8">
          <label htmlFor="title" className="block font-medium text-lg">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="block font-medium text-lg">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
}

export default Blogs;
