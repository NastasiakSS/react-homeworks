import React from 'react';

const UsersDetails = ({user, getUserId}) => {

    const {id, name, email, username} = user;

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <button onClick={() => getUserId(id)}>Post</button>
        </div>
    );
};

export default UsersDetails;