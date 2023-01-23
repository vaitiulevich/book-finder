import Counter from "./counter/Counter";
import { AllBooks } from "./AllBooks/AllBooks";
import { Search } from "./Search/Search";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import { BookPage } from "./BookPage/BookPage";
import './App.css'
import Header from "./header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Search/>
            {/* <AllBooks/> */}
            <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<AllBooks/>} />
        <Route path="/book/:ID" element={<BookPage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
        </div>
    );
}

export default App;