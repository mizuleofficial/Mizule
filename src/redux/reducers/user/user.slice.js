import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        createUser: (state, action) => action.payload,
        logoutUser: (state) => null
    }
})

const { reducer, actions } = userSlice;

export const { createUser, logoutUser } = actions

export default reducer