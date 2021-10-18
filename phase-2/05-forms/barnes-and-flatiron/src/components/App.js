//npm
import {useState} from 'react'

import BookContainer from "./BookContainer";
import Header from "./Header";
import Form from "./Form";
import{books, genres} from "../data/data.js"
function App() {
const [bookList, setBookList] = useState(books)
const [formData, setFormData] = useState({
  title:'',
  author: '',
  genre: '',
  image: '',
  price: '',
  liked: false
}) 
const handleChange = (e) => {
  console.log(formData)
  setFormData({...formData, [e.target.name]: e.target.value})
}

//TODO: On form submit add the new book to the bookList in state
const handleSubmit = (e) => {
  e.preventDefault()
  setBookList([formData, ...bookList])
}

//Edit
const populateForm = (book) => {
  setFormData({
    title:book.title,
    author: book.author,
    genre: book.genre,
    image: book.image,
    price: book.price,
    liked: false
  })
}

const handleLike = (book) => {
const idx = bookList.findIndex(bookListBook => bookListBook === book)
const bookListCopy = [...bookList]
bookListCopy[idx] = {...bookListCopy[idx], liked: !bookListCopy[idx].liked}
setBookList(bookListCopy)
}

const handleGenre = (genre) => {
  setBookList(books.filter(book => book.genre === genre))
}

  return (
    <div className="App" style={{textAlign:"center"}}>
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code Bake Repeat"/>
      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <br/>
      <BookContainer populateForm={populateForm} bookList={bookList} genreList={genres} handleGenre={handleGenre} handleLike={handleLike}/>
    </div>
  );
}

export default App;


