import React from "react";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let newMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextCreator(body))
    }

    return (
        <Dialogs sendMessage={sendMessage}
            newMessageChange={newMessageChange} 
            dialogs={state.dialogs} 
            messages={state.messages}
            newMessageText={state.newMessageText}/>
    )
}

export default DialogsContainer;