//npm
import {useState, useEffect} from 'react'

import BookContainer from "./BookContainer";
import Header from "./Header";
import Form from "./Form";

function App() {
const [books, setBooks] = useState([])
const [genres, setGenres] = useState([])
const [bookList, setBookList] = useState(books)
const [cart, setCart] = useState([])
const [visible, setVisible] = useState(true)
const [formData, setFormData] = useState({
  title:'',
  author: '',
  genre: '',
  image: '',
  price: '',
  liked: false
}) 

//TODO: Create POST request to add book

//TODO: Create PATCH request to Update book

//TODO: Create Delete request to delete book

//useEffect  -> fetch (setsState) 
//during first mount
useEffect(()=> {
  fetch("http://localhost:4000/books")
  .then(res => res.json())
  .then(data => {
    setBooks(data)
    setBookList(data)
  })
  fetch("http://localhost:4000/genres")
  .then(res => res.json())
  .then(data => setGenres(data))
},[])

//Cart
//useEffect updating state
useEffect(() => {
  if(cart.length > 0){
    alert(`${cart[cart.length-1].title} was added to cart`)
  }
},[cart])



//Form
//Handles form data
const handleChange = (e) => {
  console.log(formData)
  setFormData({...formData, [e.target.name]: e.target.value})
}


//Adds book
const handleSubmit = (e) => {
  e.preventDefault()
  setBookList([formData, ...bookList])
}

//Edit Book
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

//Updates a books like 
const handleLike = (book) => {
const idx = bookList.findIndex(bookListBook => bookListBook === book)
const bookListCopy = [...bookList]
bookListCopy[idx] = {...bookListCopy[idx], liked: !bookListCopy[idx].liked}
setBookList(bookListCopy)
}


//Updates cart 
const addToCart = (book) => {
  setCart([...cart, book])
}

//Filters books 
const handleGenre = (genre) => {
  setBookList(books.filter(book => book.genre === genre))
}


  return (
    <div className="App" style={{textAlign:"center"}}>
      <Header cart={cart} storeName="Barnes and Flatiron" slogan="Live Love Code Bake Repeat"/>
      <button onClick={() => setVisible(!visible)}>{visible?"Hide Form":"Show Form"}</button>
     {visible?<Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>:null}
      <br/>
      <BookContainer addToCart={addToCart} populateForm={populateForm} bookList={bookList} genreList={genres} handleGenre={handleGenre} handleLike={handleLike}/>
    </div>
  );
}

export default App;


