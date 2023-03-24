import React from "react";
import { NavLink } from "react-router-dom";
import s from './Chat.module.css';

const Chat = (props) => {
    return (
        <div className={s.chat + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Chat;