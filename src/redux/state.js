let store = {
    _state: {
        proffilePage: {
            posts: [
                { id: 1, message: 'Hi, my name is Dima. How are you?', likeCount: 120 },
                { id: 2, message: 'My photo before how i can big star', likeCount: 10235 }],
            newPostText: 'lolka'
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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.proffilePage.newPostText,
                likeCount: 0
            }
            this._state.proffilePage.posts.push(newPost)
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.proffilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;

export default store;