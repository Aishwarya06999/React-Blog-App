import React, {useState} from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {useBlogsCrud} from "../context/blogsCrudContext";

const EditBlog = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {id,title,category,author,content,likeStatus} = location.state.blog;
    const [newTitle, setNewTitle] = useState(title);
    const [newCategory, setNewCategory] = useState(category);
    const [newAuthor, setNewAuthor] = useState(author);
    const [newContent, setNewContent] = useState(content);
    const {updateBlogHandler} = useBlogsCrud();

    const update = (e) => {
        //for page to not get refreshed we use preventDefault
        e.preventDefault();
        if(newTitle === "" || newCategory === "" || newAuthor === "" || newContent === ""){
            alert("All the fields are mandatory")
            return
        }
        updateBlogHandler({id,title:newTitle,category:newCategory,author:newAuthor,content:newContent,likeStatus});
        setNewTitle("");
        setNewCategory("");
        setNewAuthor("");
        setNewContent("");
        navigate("/");
    }
        return (
            <div className="ui main">
                <h2>Edit Blog</h2>
                <form className="ui form" onSubmit={update}>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value )}/>
                    </div>
                    <div className="field">
                        <label>Category</label>
                        <input type="text" name="category" placeholder="Category" value={newCategory} onChange={(e) => setNewCategory(e.target.value )}/>
                    </div>
                    <div className="field">
                        <label>Author Name</label>
                        <input type="text" name="author" placeholder="Author" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value )}/>
                    </div>
                    <div className="field">
                        <label>Content</label>
                        <textarea type="text" name="content" placeholder="Content" value={newContent} onChange={(e) => setNewContent(e.target.value )}/>
                    </div>
                    <button className="ui button blue">Update</button>
                    <Link to = {`/blog/${id}`} state={{blog: location.state.blog}}>
                        <button className="ui button grey">
                            Back
                        </button>
                    </Link>
                </form>
            </div>
        );
    }


export default EditBlog;