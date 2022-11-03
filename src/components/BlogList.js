import React from "react";
import { Link } from "react-router-dom";
import { useBlogsCrud } from "../context/blogsCrudContext";
import BlogCard from "./BlogCard";

const BlogList = () => {
    const {blogs} = useBlogsCrud();

    const renderBlogList = blogs.map((blog) => {
        return (
          <BlogCard
            blog={blog}
            key={blog.id}
          />
        );
    });

    return (
        <div className="main">
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>
            <div class="ui cards">
                {renderBlogList}
            </div>
        </div>
    )
}

export default BlogList; 