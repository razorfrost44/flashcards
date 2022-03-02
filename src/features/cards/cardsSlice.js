// Imports
import { createSlice } from '@reduxjs/toolkit';

// createSlice for Topics
export const cardsSlice = createSlice({
    name: 'cards',
    initialState: { cards: {} },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;
        }
    }
});

// Selectors
export const selectCards = state => state.cards.cards;

// Exports
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;