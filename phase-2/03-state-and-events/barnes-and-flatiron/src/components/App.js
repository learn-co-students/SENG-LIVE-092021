//npm
import {useState} from 'react'

import BookContainer from "./BookContainer";
import Header from "./Header";
import Form from "./Form";
import{books, genres} from "../data/data.js"
function App() {
//TODO: filter out books based on genre
const [bookList, setBookList] = useState(books)

const handleFilter = (genre) => {
  setBookList(books.filter(book => book.genre === genre))
}

  return (
    <div className="App" style={{textAlign:"center"}}>
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code Bake Repeat"/>
      <Form />
      <div style={{display:"flex"}}>
        {genres.map(genre => <div onClick={() => handleFilter(genre)} style={{margin:"5px"}}>{genre.toUpperCase()} </div>)}
      </div>
      <BookContainer bookList={bookList} genreList={genres}/>
    </div>
  );
}

export default App;


