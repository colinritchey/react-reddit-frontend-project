import React from 'react';

export const PostItem = (data) => {
  return(
    <li key={data.id} className="content-item">
      <p>Title: {data.title}</p>
      <p>Score: {data.score}</p>
      <a href={data.url}>link</a>
    </li>
  )
}
