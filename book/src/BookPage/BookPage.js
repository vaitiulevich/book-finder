import {useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
// import {getAllpos} from "../api/postsApi";
import { getAllbooks,BASE_URL,MAX_RESULTS } from "../api/bookApi";
import './BookPage.css'

export const BookPage = () => {
    // const dispatch = useDispatch();
    const books = useSelector(state => state.books.books);
    // const total = useSelector(state => state.books.total);
    // const erorr = useSelector(state => state.books.erorr);
    // const searchTerm=useSelector(state=>state.search.searchTerm)    
   const navigate = useNavigate();

    useEffect(() => {
        if (books.length === 0) {
          navigate('/');
        }
      }, [books, navigate]);
    // console.log(searchTerm)
    // let category=''
    // let page=0
    // const startIndex = MAX_RESULTS * page;
    // let sort = 'relevance'
  const currentBook = books.find(e => e.id === window.location.pathname.substring(6));

  console.log(books)
  const handleOnClick = () => {
    navigate('/');
  };

    return (
       <div className="book-page container">
            <img src={currentBook.volumeInfo.imageLinks?.thumbnail} alt='book' className='img-book'/>
    <div className='content-book'>
          <h3 >{currentBook.volumeInfo.title}</h3>
          <div>{currentBook.volumeInfo.authors}</div>
    <p className='p-book'>{currentBook.volumeInfo.categories}</p>
          <p className='p-book'>{currentBook?.volumeInfo.description}</p>
          <button onClick={handleOnClick} className='btn-back'>
          ⏎ back
    </button>
    </div>
       </div>
    );
}