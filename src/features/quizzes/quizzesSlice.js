// Imports
import { createSlice } from '@reduxjs/toolkit';
import { updateTopicQuizId } from '../topics/topicsSlice';

// createSlice for Topics
export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: { quizzes: {} },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    },
    extraReducers: {}
});

// Thunk Action Creators
export const newQuizThunkActionCreator = (newQuiz) => {
    const { id, name, topicId, cardIds } = newQuiz;
    return (dispatch) => {
        dispatch(addQuiz(newQuiz));
        dispatch(updateTopicQuizId({ quizId: id, topicId: topicId }));
    };
};

// Selectors
export const selectQuizzes = state => state.quizzes.quizzes;

// Exports
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;