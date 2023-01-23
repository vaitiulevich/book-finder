import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllbooks } from '../api/bookApi';
import { getSearchTerm } from './Action';
// import { fetchCount } from './counterAPI';

const initialState = {
    searchTerm:'',
    erorr :null 
};

const Search = createSlice({
    name: 'Search',
    initialState,
    extraReducers:{
        [getSearchTerm.pending] : (state,action)=>{
           state.erorr=null;
        },
        [getSearchTerm.fulfilled] : (state,action)=>{
            state.searchTerm=action.payload;
            console.log(action.payload)
            state.erorr=null;
        }
        , [getSearchTerm.rejected] : (state,action)=>{
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



export default Search.reducer;
