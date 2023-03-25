import React from "react";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/state";
import Chat from "./Chat/Chat";
import s from './Dialogs.module.css';
import Message from "./Messages/Message";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElement = state.dialogs.map(d => <Chat name={d.name} id={d.id} />)

    let messagesElement = state.messages.map(m => <Message message={m.message} id={m.id} />)

    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageTextCreator(body))
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