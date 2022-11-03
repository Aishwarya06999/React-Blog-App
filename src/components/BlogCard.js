import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
    const {id,title,category,author,content,likeStatus} = props.blog;
    return (
        <div className="cards">
            <div class="ui card">
                <div class="content">
                    <Link to = {`/blog/${id}`} state={{blog: props.blog}} >
                        <div class="header" style={{ color: "black"}}><h3>{title}</h3></div>
                        <div class="meta">
                            <span class="tag tag-red">{category}</span>
                        </div>
                        <div class="description">
                        <p>{content.substring(0,100)}</p>
                        </div>
                    </Link>
                </div>
                <div class="extra content">
                    <div class="right floated author">
                        <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/large/jenny.jpg" /> {author}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard; 