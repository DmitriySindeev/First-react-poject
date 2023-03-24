import React from 'react';
import s from './ProffileInfo.module.css';

const ProffileInfo = (props) => {
  return (
    <div>
      <div className={s.content}>
        <img src='https://www.designstreet.com.au/staging2021/wp-content/uploads/2019/09/Logos_Blog.jpg' alt='lol' width='100%'></img>
      </div>
      <div className={s.description}>
        Ava + discription
      </div>
    </div>
  )
}

export default ProffileInfo;