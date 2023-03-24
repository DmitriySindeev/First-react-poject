import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Proffile.module.css';

const Proffile = () => {
  return (
    <main className={s.content}>
      <ProffileInfo />
        
      <div className={s.content}>
        <img src='https://www.designstreet.com.au/staging2021/wp-content/uploads/2019/09/Logos_Blog.jpg' width='100%'></img>
      </div>
      <div>
        Ava + discription
      </div>


      <MyPost />
    </main>
  )
}

export default Proffile;