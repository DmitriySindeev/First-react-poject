import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/proffile-reducer';
import MyPost from './MyPost';

const MyPostContainer = (props) => {

  let state = props.store.getState()

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let updateNewPostText = (text) => {
    props.store.dispatch(updatePostActionCreator(text))
  }

  return <MyPost addPost={addPost} updateNewPostText={updateNewPostText} posts={state.proffilePage.posts} 
  newPostText={state.proffilePage.newPostText}/>
}

export default MyPostContainer;