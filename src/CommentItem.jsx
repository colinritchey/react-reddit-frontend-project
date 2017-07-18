import React from 'react';

export const CommentItem = (data) => {
  return(
    <li key={data.id} className="content-item">
      <p className="content-score">{data.score}</p>
      <div className="content-inner">
        <p>{data.body}</p>
        <p>submitted by {data.author}</p>
        <br/>
        <a href={data.link_permalink}>
          thread
        </a>
      </div>
    </li>
  )
}
