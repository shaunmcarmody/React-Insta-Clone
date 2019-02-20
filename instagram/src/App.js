import React from 'react';
import Login from './components/Login/Login';
import PostsPage from './components/PostsPage/PostsPage';
import authenticate from './authentication/authenticate';

const App = () => <PostsPage />

export default authenticate(App)(Login)