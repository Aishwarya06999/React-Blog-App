import React, { useState } from "react";
import {useNavigate, Link, useLocation } from "react-router-dom";
import {useBlogsCrud} from "../context/blogsCrudContext";

const BlogDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {id,title,category,author,content,likeStatus} = location.state.blog;
    const [currentLikeStatus, setcurrentLikeStatus] = useState(likeStatus);
    const {removeBlogHandler} = useBlogsCrud();
    const {likeVoteHandler} = useBlogsCrud();
    const {unLikeVoteHandler} = useBlogsCrud();

    const deleteBlog = (id) => {
        removeBlogHandler(id);
        navigate("/");
    }

    const likeVote = (id) => {
        likeVoteHandler(id);
        if (currentLikeStatus === "1"){
            setcurrentLikeStatus("0")
        }
        else {
            setcurrentLikeStatus("1")
        }
    }

    const unLikeVote = (id) => {
        unLikeVoteHandler(id);
        if (currentLikeStatus === "-1"){
            setcurrentLikeStatus("0")
        }
        else {
            setcurrentLikeStatus("-1")
        }
    }

    return (
        <div className="main">
            <div class="ui card">
                <div class="content">
                    <i
                        className="trash alternate outline icon"
                        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
                        onClick={() => deleteBlog(id)}
                    ></i>
                    <Link 
                        to={`/edit`}
                        state={{ blog: location.state.blog } }>
                        <i
                            className="edit alternate outline icon"
                            style={{ color: "blue", marginTop: "7px" }}
                        ></i>
                    </Link>
                    <div class="header">{title}</div>
                    <div class="meta">
                        <span class="tag tag-red">{category}</span>
                    </div>
                    <div class="description">
                    <p>{content}</p>
                    </div>
                </div>

                <div class="extra content">
                    {/* {likbutton}
                    {unlikebutton} */}
                    {(() => {
                    switch (currentLikeStatus) {
                    case "0":   return <i className="thumbs up outline icon left" onClick={() => likeVote(id)}></i>;
                    case "1": return <i className="thumbs up icon left" onClick={() => likeVote(id)}></i>;
                    default:      return <i className="thumbs up outline icon left" onClick={() => likeVote(id)}></i>;
                    }
                    })()}
                    {(() => {
                    switch (currentLikeStatus) {
                    case "0":   return <i className="thumbs down outline icon left" onClick={() => unLikeVote(id)}></i>;
                    case "-1": return <i className="thumbs down icon left" onClick={() => unLikeVote(id)}></i>;
                    default:      return <i className="thumbs down outline icon left" onClick={() => unLikeVote(id)}></i>;
                    }
                    })()}
                    <div class="right floated author">
                        <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/large/jenny.jpg" /> {author}
                    </div>
                </div>
            </div>

            <div className="center-div">
                <Link to="/">
                <button className="ui button blue">
                    Back to Blog List
                </button>
                </Link>
            </div>
        </div>
    )
}

export default BlogDetails; 