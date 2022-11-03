import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useBlogsCrud } from "../context/blogsCrudContext";

const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [likeStatus, setLikeStatus] = useState("0");

    const {addBlogHandler} = useBlogsCrud();
    const navigate = useNavigate();

    const add = (e) => {
        //for page to not get refreshed we use preventDefault
        e.preventDefault();
        if(title === "" || category === "" || author === "" || content === ""){
            alert("All the fields are mandatory")
            return
        }
        addBlogHandler({title,category,author,content,likeStatus});
        setTitle("");
        setCategory("");
        setAuthor("");
        setContent("");
        navigate("/");
    }
    return (
        <div className="ui main">
            <h2>Add Blog</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value )}/>
                </div>
                <div className="field">
                    <label>Category</label>
                    <input type="text" name="category" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value )}/>
                </div>
                <div className="field">
                    <label>Author Name</label>
                    <input type="text" name="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value )}/>
                </div>
                <div className="field">
                    <label>Content</label>
                    <textarea type="text" name="content" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value )}/>
                </div>
                <button className="ui button blue">Add</button>
                <Link to="/">
                    <button className="ui button grey">
                        Back
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default AddBlog;