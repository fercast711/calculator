import { createSlice } from "@reduxjs/toolkit";

const convertSlice = createSlice({
    name: "convert",
    initialState:{
        decimal: 1,
        roman: "",
        number: {
            "M": 1000,
            "CM": 900,
            "D": 500,
            "CD":400,
            "C":100,
            "XC":90,
            "L":50,
            "XL": 40,
            "X":10,
            "IX": 9,
            "V":5,
            "IV": 4,
            "I": 1
        }
    },
    reducers:{
        setDecimal: (state, action)=>{
            state.decimal = action.payload
        },
        setRoman: (state)=>{
            state.roman = ""
            for(let obj in state.number){
                while(state.decimal >= state.number[obj]){
                    state.roman += obj
                    state.decimal -= state.number[obj]
                }
            }
        }
    }
})

export const {setDecimal, setRoman} = convertSlice.actions
export default convertSlice.reducer