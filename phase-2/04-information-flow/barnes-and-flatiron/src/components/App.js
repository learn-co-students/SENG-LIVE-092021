//npm
import {useState} from 'react'

import BookContainer from "./BookContainer";
import Header from "./Header";
import Form from "./Form";
import{books, genres} from "../data/data.js"
function App() {
const [bookList, setBookList] = useState(books)
//Q Why do we need state?
//TODO: On click update a books like in state
//TODO: On click of genera update books displayed on browser.
const handleLike = (book) => {
//Found index
const idx = bookList.findIndex(bookListBook => bookListBook === book)
//Made a copy bookList
const bookListCopy = [...bookList]
//Made a copy of our book and updated the liked
bookListCopy[idx] = {...bookListCopy[idx], liked: !bookListCopy[idx].liked}
//set our copy to state
setBookList(bookListCopy)
}

const handleGenre = (genre) => {
  //updates the state
  //rerenders the component
  //filter returns a new array
  setBookList(books.filter(book => book.genre === genre))
}

  return (
    <div className="App" style={{textAlign:"center"}}>
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code Bake Repeat"/>
      <Form />
      <BookContainer bookList={bookList} genreList={genres} handleGenre={handleGenre} handleLike={handleLike}/>
    </div>
  );
}

export default App;


