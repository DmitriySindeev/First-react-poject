import React from 'react';
import s from './MyPost.module.css';
import Post from './Posts/Post';

const MyPost = (props) => {

  let postElement = props.proffilePage.posts.map(p => <Post message={p.message} key={p.id} likeCount={p.likeCount} id={p.id} />)

  let newPostText = props.proffilePage.newPostText

  let onPostClick = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let text = e.target.value
    props.updateNewPostText(text)
  }

  return (
    <div className={s.MyPostBlock}>
      My post
      <div>
        <div>
          <textarea onChange={onPostChange} value={newPostText} cols="120" rows="5" />
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