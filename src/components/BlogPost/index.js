import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import './style.css';
// import postImage from '../../blogPostImages/fitness-blog-post.jpg';
import blogPost from '../../data/blog.json';

/**
 * @author
 * @function BlogPost
**/

const BlogPost = (props) => {

    const [post, setPost] = useState({});
    const [postId, setPostId] = useState('');
    
    useEffect( () => {
        const postId = props.match.params.postId;
        const post = blogPost.data.find(post => post.id == postId);
        setPost(post);
        setPostId(postId);
        console.log(post);
    }, [post, props.match.params.postId]);

    return(
            <div className="blogPostContainer">
                <Card>
                    <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">posted on {post.postedOn}, 2016 by {post.author}</span>
                    </div>

                    <div className="postImageContainer">
                        <img src={require('../../blogPostImages/fitness-blog-post.jpg')} alt="Post Image" />
                    </div>

                    <div className="postContent">
                        <h3>{post.blogTitle}</h3>
                        <p>{post.blogText}</p>
                    </div>

                </Card>
            </div>
    );
}

export default BlogPost;