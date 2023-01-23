import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllbooks } from '../api/bookApi';
// import { fetchCount } from './counterAPI';

const initialState = {
    books:[],
    total:0,
    erorr :null 
};

const AllBooksSlice = createSlice({
    name: 'AllBooks',
    initialState,
    extraReducers:{
        [getAllbooks.pending] : (state,action)=>{
           state.isLoading=true;
           state.erorr=null;
        },
        [getAllbooks.fulfilled] : (state,action)=>{
            state.books=action.payload.items;
            state.total=action.payload.totalItems;
            state.isLoading=false;
            state.erorr=null;
        }
        , [getAllbooks.rejected] : (state,action)=>{
            state.isLoading=false;
            state.erorr=action?.error?.message;
        }

    },
    reducers: {
        addOne: (state) => {
            state.count += 1;
        },
        munisOne: (state) => {
            state.count -= 1;
        },
        setName: (state, action) => {
            state.name = action.payload
        }
    }
}
);



export default AllBooksSlice.reducer;
