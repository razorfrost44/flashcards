// Imports
import { createSlice } from '@reduxjs/toolkit';

// createSlice for Topics
const options = {
    name: 'topics',
    initialState: { topics: {} },
    reducers: {
        addTopic: (state, action) => {
            const newTopic = { ...action.payload, quizIds: [] };
            state.topics[action.payload.id] = newTopic;
        },
        updateTopicQuizId: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
};
export const topicsSlice = createSlice(options);

// Selectors
// May need to be changed to state.topics.topics not sure. test later
export const selectTopics = state => state.topics.topics;

// Exports
export const { addTopic, updateTopicQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;