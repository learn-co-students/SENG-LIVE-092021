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
//TODO: Ob click of genera update books displayed on browser.

  return (
    <div className="App" style={{textAlign:"center"}}>
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code Bake Repeat"/>
      <Form />
 
      <BookContainer bookList={bookList} genreList={genres}/>
    </div>
  );
}

export default App;


