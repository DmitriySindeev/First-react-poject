import dialogsReducer from "./dialogs-reducer";
import proffileReducer from "./proffile-reducer";

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
        this._state.proffilePage = proffileReducer(this._state.proffilePage, action)  
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;