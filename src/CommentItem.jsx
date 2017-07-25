import React from 'react';
import style from "./style.css";

export const CommentItem = (data) => {
  return(
    <li key={data.id} className={style.content_item}>
      <p className={style.content_score}>{data.score}</p>
      <div className={style.content_inner}>
        <p>{data.body}</p>
        <p className={style.className}>submitted by {data.author}</p>
        <br/>
        <a href={data.link_permalink}>
          thread
        </a>
      </div>
    </li>
  )
}
