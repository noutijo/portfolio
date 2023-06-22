import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from "redux/store"

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        name: null
    },
    reducers: {
        setProfileData: (state, action) => {
            state.name = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

            //TODO, handle client side state override
            if (!action.payload.profile.name) {
                return state
            }

            state.name = action.payload.profile.name
            console.log(state.name)
        }
    }
})

export const { setProfileData } = profileSlice.actions

export const selectProfile = (state: AppState) => state.profile

export default profileSlice.reducer
