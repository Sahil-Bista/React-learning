import React, { useState } from 'react';

const App2 = () => {
  const usersURL = 'https://jsonplaceholder.typicode.com/users';
  const postsURL = 'https://jsonplaceholder.typicode.com/posts';
  const commentsURL = 'https://jsonplaceholder.typicode.com/comments';

  const [Users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(usersURL);
      if (!response.ok)
        throw Error('Cannot fetch Users from the Api. Please try again');
      const users = await response.json();
      setPosts([]);
      setComments([]);
      setUsers(users);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(postsURL);
      if (!response.ok)
        throw Error('Cannot fetch posts from the Api. Please try again');
      const posts = await response.json();
      setUsers([]);
      setComments([]);
      setPosts(posts);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(commentsURL);
      if (!response.ok)
        throw Error('Cannot fetch comments from the API, please try again');
      const comments = await response.json();
      setUsers([]);
      setPosts([]);
      setComments(comments);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  return (
    <div>
      <button onClick={fetchUsers}> Users </button>
      <button onClick={fetchPosts}> Posts </button>
      <button onClick={fetchComments}> Comments</button>
      {fetchError && (
        <p style={{ color: 'red' }}> {`Error : ${fetchError}`} </p>
      )}
      {!fetchError &&
        Users.length > 0 &&
        Users.map((user) => (
          <div key={user.id} style={{ border: 'solid white 2px' }}>
            <p>username : {user.username}</p>
            <p> email : {user.email}</p>
          </div>
        ))}
      {!fetchError &&
        posts.length > 0 &&
        posts.map((post) => (
          <div key={post.id} style={{ border: 'solid white 2px' }}>
            <p> title : {post.title}</p>
            <p> body : {post.body}</p>
          </div>
        ))}

      {!fetchError &&
        comments.length > 0 &&
        comments.map((comment) => (
          <div key={comment.id} style={{ border: 'solid white 2px' }}>
            <p> name : {comment.name}</p>
            <p> body : {comment.body}</p>
          </div>
        ))}
    </div>
  );
};

export default App2;
