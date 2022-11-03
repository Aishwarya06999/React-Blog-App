import { createContext, useContext, useEffect, useState } from "react";
import { v4 } from "uuid";

const blogsCrudContext = createContext();

export function BlogsCrudContextProvider({children}) {
    const LOCAL_STORAGE_KEY = "blogs";
    const [blogs, setBlogs] = useState(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
    );

    const addBlogHandler = (blog) => {
        setBlogs([...blogs, { id: v4(), ...blog }]);
      };
    
    const removeBlogHandler = (id) => {
    const newBlogList = blogs.filter((blog) => {
        return blog.id !== id;
    });
    setBlogs(newBlogList);
    };

    const updateBlogHandler = (blogToSave) => {
        const blog = blogs.find(blog => blog.id === blogToSave.id);
        if(blog) {
            blog.title=blogToSave.title;
            blog.content=blogToSave.content;
            blog.author=blogToSave.author;
            blog.category=blogToSave.category;
            blog.likeStatus = blogToSave.likeStatus;
        }
        setBlogs(blogs);
    };

    const likeVoteHandler = (id) => {
        const blog = blogs.find(blog => blog.id === id);
        if(blog) {
            if (blog.likeStatus === "1"){
                blog.likeStatus = "0"
            }
            else {
                blog.likeStatus = "1"
            }
        }
        console.log(blogs)
        setBlogs(blogs);
    }
    const unLikeVoteHandler = (id) => {
        const blog = blogs.find(blog => blog.id === id);
        if(blog) {
            if (blog.likeStatus === "-1"){
                blog.likeStatus = "0"
            }
            else {
                blog.likeStatus = "-1"
            }
        }
        setBlogs(blogs);
    }

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(blogs));
    }, [blogs]);

    const value = {
        blogs,
        addBlogHandler,
        removeBlogHandler,
        updateBlogHandler,
        likeVoteHandler,
        unLikeVoteHandler
    }

    return (
        <blogsCrudContext.Provider value={ value }>
            {children}
        </blogsCrudContext.Provider>
    )
}

export function useBlogsCrud() {
    return useContext(blogsCrudContext)
}