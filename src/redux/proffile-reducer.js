const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, my name is Dima. How are you?', likeCount: 120 },
        { id: 2, message: 'My photo before how i can big star', likeCount: 10235 }],
    newPostText: ''
}

const proffileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText
            return {...state, newPostText: '', posts: [...state.posts, {id: 5, message: newPost, likeCount: 0}]}
        case UPDATE_NEW_POST:
            return {...state, newPostText: action.newText }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updatePostActionCreator = (text) => ({ type: UPDATE_NEW_POST, newText: text })

export default proffileReducer;