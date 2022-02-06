import React from 'react';
import PostListItem from '../PostListItem/PostListItem';
import './PostList.css'
const PostList = ({posts , onDelete , onToggleImportant , onToggleLiked }) => {
    const elements = posts.map((item) =>{
        const {id , ...ItemProps} = item
        return(
            <li   key={id}  className="list-group-item">
                <PostListItem  
                {...ItemProps} 
                key={id}
                onDelete={()=> onDelete(id)}
                onToggleLiked={()=>onToggleLiked(id) }
                onToggleImportant={()=> onToggleImportant(id)}
                 />
            </li>
        )
    })
    return (
            <ul className="app-list list-group">
               {elements}
            </ul>
    );
};

export default PostList;