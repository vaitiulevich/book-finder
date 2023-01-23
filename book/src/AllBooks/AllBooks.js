import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
// import {getAllpos} from "../api/postsApi";
import { getAllbooks,BASE_URL,MAX_RESULTS } from "../api/bookApi";
import { Link } from 'react-router-dom';
import './allBooks.css'

export const AllBooks = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books);
    const total = useSelector(state => state.books.total);
    const erorr = useSelector(state => state.books.erorr);
    const searchTerm=useSelector(state=>state.search.searchTerm)    
    
    console.log(searchTerm)
    let category=''
    let page=0
    const startIndex = MAX_RESULTS * page;
    let sort = 'relevance'

    useEffect(() => {
        dispatch(getAllbooks(`${BASE_URL}?q=${searchTerm}+subject:${category}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sort}&key=AIzaSyBoPPEYw_brfW_DvaqYmSW5f-gwnoXlkUc`));
    }, [dispatch,searchTerm]);

    return (
       <div className="container">
            <p className="total">found {total} results</p>
            <div className="all-books">
           {erorr !== null ? <h1>{erorr}</h1> : null}
           {
           books.length >= 1 ? (books.map(books => 
            <div key={books.id}>
            <Link to={`/book/${books.id}`}>
            <img src={books.volumeInfo.imageLinks.thumbnail || 'no'}/>
            </Link>
           <h4>{books.volumeInfo.title}</h4>
           <p>{books.volumeInfo.authors}</p>

            </div>
           )) : (<h6>no posts</h6>)
           }
           </div>
       </div>
    );
}