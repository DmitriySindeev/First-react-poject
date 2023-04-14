import React from 'react';
import s from './Proffile.module.css';
import ProffileInfo from './ProffileInfo/ProffileInfo';
import MyPostContainer from './MyPost/MyPostContainer';

const Proffile = () => {
  return (
    <main className={s.content}>
      <ProffileInfo />
      <MyPostContainer />
    </main>
  )
}

export default Proffile;