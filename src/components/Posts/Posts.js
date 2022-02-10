import React from 'react';

const Post = ({posts}) => {
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/> )}
        </div>
    );
};

export default Post;