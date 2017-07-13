import React from 'react';

export const PostItem = (data) => {
  return(
    <li key={data.id}>
      <p>Title: {data.title}</p>
      <p>Score: {data.score}</p>
      <a href={data.url}>link</a>
    </li>
  )
}
