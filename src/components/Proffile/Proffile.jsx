import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Proffile.module.css';
import ProffileInfo from './ProffileInfo/ProffileInfo';

const Proffile = (props) => {
  return (
    <main className={s.content}>
      <ProffileInfo />
      <MyPost
        posts={props.proffilePage.posts}
        newPostText={props.proffilePage.newPostText}
        dispatch={props.dispatch} />
    </main>
  )
}

export default Proffile;