import React from 'react';

const Posts = ({posts: {id, userId, title, body}}) => {
    return (
        <div>
            <div>Id: {id}/div></div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>*/
        </div>
    );
};

export default Posts;