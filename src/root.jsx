import React, { Component } from 'react';
import App from './App';
import PostIndex from './PostIndex.jsx'
import CommentIndex from './CommentIndex.jsx'

import { HashRouter, Route, Link } from 'react-router-dom';

import style from "./style.css";

const Root = () => {
  return (
    <HashRouter>
      <div className="main-container">

        <div className={style.header_container}>
          <h2>Reddit Frontend Clone</h2>
        </div>

        <ul className={style.link_containers}>
          <li className={style.link}><Link to="/posts" >Posts</Link></li>
          <li className={style.link}><Link to="/comments" >Comments</Link></li>
        </ul>

        <div className={style.content_container}>

          <Route path="/posts" component={PostIndex}/>
          <Route path="/comments" component={CommentIndex}/>
        </div>
      </div>
    </HashRouter>
  )
}

export default Root;
