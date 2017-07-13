import React from 'react';

export const CommentItem = (data) => {
  return(
    <li key={data.id}>
      <p>Body: {data.body}</p>
      <p>Score: {data.score}</p>
      <a href={data.link_url}>link</a>
    </li>
  )
}
