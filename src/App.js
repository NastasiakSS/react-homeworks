import React, {useState} from 'react';

import UsersDetails from "./components/UsersDetails/UsersDetails";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import {postsService} from "./service/posts.service";


const App = () => {

    const [user, setUser] = useState(null);
    const getUser = (user) => {
    setUser(user);
    }


    const [userId, setUserId] = useState(null);
    const getUserId = (id) => {
        postsService.getByUserId(id).then(value => setPosts([...value]))
}

const [posts, setPosts] = useState(null);


    return (
        <div>
            <div style={{display:"flex"}}>
                <Users getUser={getUser}/>
                <UsersDetails user={user} getUserId={getUserId}/>
            </div>
            <Posts posts={posts}/>
        </div>
    );
};

export default App;



