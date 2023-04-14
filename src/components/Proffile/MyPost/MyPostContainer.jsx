import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/proffile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    proffilePage: state.proffilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updatePostActionCreator(text))
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;