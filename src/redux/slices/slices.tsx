import { createSlice, current } from "@reduxjs/toolkit"

type objectValues = {
    user: string,
    currInput: any,
    datas: any
}
const initialState: objectValues = {
    user: '',
    currInput: {},
    datas: []
}

export const Slices = createSlice({
    name: 'Ashiq',
    initialState,
    reducers: {
        getData: (state, action) => {           
            state.datas = action.payload;
        },
        addData: (state, action) => {           
            state.datas.push(action.payload)            
        },
        updateData: (state, action) => {               
            let filterdata = state.datas.filter((item:any)=> item?._id === action.payload?._id)
            // console.log('state', current(state))            
            
            const updatedData = action.payload; // Assuming action.payload is the updated data object
            state.datas = state.datas.map((item: any) =>
                item._id === updatedData._id ? updatedData : item
            );
        },
        deleteData: (state, action) => {
            console.log('state', action.payload)  
            state.datas = state.datas.filter((item: any)=> item?._id !== action.payload)
        },
        currInput : (state, action) => {            
            state.currInput = action.payload
        },

    }

});


export const {getData, addData, updateData, deleteData, currInput} = Slices.actions;
export default Slices.reducer;