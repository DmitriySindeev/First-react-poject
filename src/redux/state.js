const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const SEND_MESSAGE = 'SEND_MESSAGE';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let store = {
    _state: {
        proffilePage: {
            posts: [
                { id: 1, message: 'Hi, my name is Dima. How are you?', likeCount: 120 },
                { id: 2, message: 'My photo before how i can big star', likeCount: 10235 }],
            newPostText: ''
        },
        dialogsPage: {
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
    },

    _callSubscriber() {
        console.log('State change')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.proffilePage.newPostText,
                likeCount: 0
            }
            this._state.proffilePage.posts.push(newPost)
            this._state.proffilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.proffilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = { 
                id: 6, 
                message: this._state.dialogsPage.newMessageText 
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.body
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updatePostActionCreator = (text) => ({ type: UPDATE_NEW_POST, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_TEXT, body: body })

window.store = store;

export default store;