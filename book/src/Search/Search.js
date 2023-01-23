import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { getAllbooks,BASE_URL,MAX_RESULTS } from "../api/bookApi";
import { getSearchTerm } from "./Action";
import './search.css'

export const Search = () => {
    const dispatch = useDispatch();
    // const g=useSelector(state=>console.log(state))
    const searchTerm = useSelector(state => state.search.searchTerm);
    const [text,setText]=useState(searchTerm)
    // const isLoading = useSelector(state => state.postsData.isLoading);
    const erorr = useSelector(state => state.books.erorr);

console.log(searchTerm)

const handleOnChange = e => {
    console.log(e.target.value)
    setText(e.target.value);
  };

const handleSubmit = e => {
    e.preventDefault();
    let category=''
    let page=0
    const startIndex = MAX_RESULTS * page;
    let sort = 'relevance'
    if (text !== '') {
       dispatch(getSearchTerm(text)) 
        // dispatch(getAllbooks(`${BASE_URL}?q=${text}+subject:${category}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sort}&key=AIzaSyBoPPEYw_brfW_DvaqYmSW5f-gwnoXlkUc`));
        // navigate('books/list');
    }
  };
  console.log(text)
    return (
       <div className="search">
        <form onSubmit={handleSubmit}>
            <input type='text' 
                name='searchTerm'
                className='inp-s'
                value={text}
                onChange={handleOnChange}
                placeholder='Search...'/>
                <button className='btn-s' id='submit-button' size='sm' variant='secondary' type='submit'>Search</button>
        </form>
       </div>
    );
}