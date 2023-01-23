import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
export const MAX_RESULTS = 32;


export  const getAllbooks=createAsyncThunk('AllBooks/getAll' ,async (url ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    console.log(url)
    try{
    const res= await axios.get(url);
    console.log(res)
        return res.data;
    }catch (err){
        return rejectWithValue(err.message);
    }

})