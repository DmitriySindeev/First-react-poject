const SEND_MESSAGE = 'SEND_MESSAGE';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Marina' },
        { id: 4, name: 'Psina' },
        { id: 5, name: 'Loy' },
        { id: 6, name: 'Masturbini' },
        { id: 7, name: 'Chad' },
        { id: 8, name: 'Kligan' }],
    messages: [
        { id: 1, message: 'Hi man' },
        { id: 2, message: 'all right' },
        { id: 3, message: 'Give me your pasport pls' },
        { id: 4, message: 'Lets go mazafaka' },
        { id: 5, message: 'Yo' }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_TEXT, body: body })

export default dialogsReducer;