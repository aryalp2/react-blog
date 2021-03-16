import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../data/blog';
import { NavLink, Route } from 'react-router-dom';

/**
 * @author
 * @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    useEffect( () => {
        const posts = blogPost.data;
        setPosts(posts);
    }, posts);
    
    return(

        <div className="sidebarContainer">
            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileimageContainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGAb43NxZswWRLw9RoxC8YwykXlLy_efq2r674Xj0ffRR3D-0P" alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is John Doe. I am a Software Developer specializing in MERN Stack Development...:)</p>
                </div>
            </Card>
            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>
            <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink to={`/post/${post.id}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>

                            );
                        })
                    }

                </div>

            </Card>
        </div>
    );
}

export default Sidebar;