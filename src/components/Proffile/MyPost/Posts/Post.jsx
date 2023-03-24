import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt="" />
        {props.message}
      <div>
        <span>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZRn8W46wBbAqtivFdHqRgZqVpkgcnbibUxevuI2oWD_a_76riZiSm70G3_dWe_vk4q4&usqp=CAU" alt="" />
          {props.like}
        </span>
      </div>
    </div>
  )
}

export default Post;