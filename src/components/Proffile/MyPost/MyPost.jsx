import React from 'react';
import s from './MyPost.module.css';
import Post from './Posts/Post';

const MyPost = (props) => {

  let postElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id} />)

  let newPostElement = React.useRef();

  let onPostClick = () => {
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST', newText: text })
  }

  return (
    <div className={s.MyPostBlock}>
      My post
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} cols="120" rows="5" />
        </div>
        <div>
          <button onClick={onPostClick}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>
  )
}

export default MyPost;