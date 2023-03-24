import React from "react";
import Chat from "./Chat/Chat";
import s from './Dialogs.module.css';
import Message from "./Messages/Message";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map ( d => <Chat name={d.name} id={d.id} /> )
    let messagesElement = props.state.messages.map ( m => <Message message= {m.message} id= {m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.chat__items}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
            {messagesElement}
            </div>

        </div>
    )
}

export default Dialogs;