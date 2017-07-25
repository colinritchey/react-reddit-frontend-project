import React from 'react';
import style from "./style.css";

export const PostItem = (data) => {
  let thumbnail = data.thumbnail;
  if(['default', 'image', 'self'].indexOf(thumbnail) !== -1 ){
    thumbnail = 'https://i.imgur.com/CduSn7x.jpg';
  }

  return(
    <li key={data.id} className={style.content_item}>
      <p className={style.content_score}>{data.score}</p>
      <img className={style.content_item_img} src={thumbnail}></img>
      <div className={style.content_inner}>
        <a href={data.url}>
          <h3>{data.title}</h3>
        </a>
        <p>submitted by {data.author}</p>
      </div>
    </li>
  )
}
