import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "redux/store"

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        isopen: false
    },
    reducers: {
        setMenuStatus: (state, action) => {
            state.isopen = !state.isopen
        },
    },
})

export const { setMenuStatus } = menuSlice.actions

export const getMenuStatus = (state: AppState) => state.menu

export default menuSlice.reducer

//function binding
// const calcul =(a:number, b:number):number=>{
//   return a+b
// }
// const addTwo = calcul.bind({}, 2)

