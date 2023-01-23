import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getSearchTerm=createAsyncThunk('Search/getAll',async (searchTerm)=>{
    // console.log(searchTerm)
    return searchTerm
})

// export  const getAllbooks=createAsyncThunk('AllBooks/getAll' ,async (url ,thunkAPI)=>{
//     const {rejectWithValue}=thunkAPI;
//     console.log(url)
//     try{
//     const res= await axios.get(url);
//     console.log(res)
//         return res.data;
//     }catch (err){
//         return rejectWithValue(err.message);
//     }

// })