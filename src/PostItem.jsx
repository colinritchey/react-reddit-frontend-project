import React from 'react';

export const PostItem = (data) => {
  let thumbnail = data.thumbnail;
  if(['default', 'image', 'self'].indexOf(thumbnail) !== -1 ){
    thumbnail = 'https://i.imgur.com/CduSn7x.jpg';
  }

  return(
    <li key={data.id} className="content-item">
      <p className="content-score">{data.score}</p>
      <img src={thumbnail}></img>
      <div className="content-inner">
        <a href={data.url}>
          <h3>{data.title}</h3>
        </a>
        <p>submitted by {data.author}</p>
      </div>
    </li>
  )
}
