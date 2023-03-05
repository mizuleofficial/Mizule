import { createSlice } from "@reduxjs/toolkit"

import { fetchZulesReducer } from './zules.reducer'

const zulesSlice = createSlice({
    name: "zules",
    initialState: [],
    reducers: {
        fetchZules: fetchZulesReducer,
        likeZuleTeaser: (state, action) => {
            if (state[action.payload.activeIndex].reviews.likes.includes(action.payload.id_user)) {
                state[action.payload.activeIndex].reviews = { comments: state[action.payload.activeIndex].reviews.comments, likes: [...state[action.payload.activeIndex].reviews.likes.filter(like => like !== action.payload.id_user)] }
            } else {
                state[action.payload.activeIndex].reviews = { comments: state[action.payload.activeIndex].reviews.comments, likes: [...state[action.payload.activeIndex].reviews.likes, action.payload.id_user] }
            }
            return state
        }
    }
})

const { reducer, actions } = zulesSlice;

export const { fetchZules, likeZuleTeaser } = actions

export default reducer