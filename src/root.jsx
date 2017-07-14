import React, { Component } from 'react';
import App from './App';
import PostIndex from './PostIndex.jsx'
import CommentIndex from './CommentIndex.jsx'

import { HashRouter, Route, Link } from 'react-router-dom';

const Root = () => {
  return (
    <HashRouter>
      <div className="main-container">

        <div className="header-container">
          <h2>Reddit Frontend Clone</h2>
        </div>

        <ul className="link-containers">
          <li className="link"><Link to="/posts" >Posts</Link></li>
          <li className="link"><Link to="/comments" >Comments</Link></li>
        </ul>
        <div className="content-container">
          <Route path="/posts" component={PostIndex}/>
          <Route path="/comments" component={CommentIndex}/>
        </div>
      </div>
    </HashRouter>
  )
}

export default Root;
