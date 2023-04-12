import React from "react";
import Chat from "./Chat/Chat";
import s from './Dialogs.module.css';
import Message from "./Messages/Message";

const Dialogs = (props) => {

    let dialogsElement = props.dialogs.map(d => <Chat name={d.name} id={d.id} />)

    let messagesElement = props.messages.map(m => <Message message={m.message} id={m.id} />)

    let newMessageText = props.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.newMessageChange(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.chat__items}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElement}
                </div>
                <div>
                    <div>
                        <textarea onChange={onNewMessageChange} value={newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send Message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;