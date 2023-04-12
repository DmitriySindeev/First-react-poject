import React from 'react';
import s from './Proffile.module.css';
import ProffileInfo from './ProffileInfo/ProffileInfo';
import MyPostContainer from './MyPost/MyPostContainer';

const Proffile = (props) => {
  return (
    <main className={s.content}>
      <ProffileInfo />
      <MyPostContainer store={props.store} />
    </main>
  )
}

export default Proffile;