//npm
import {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';

import BookContainer from "./BookContainer";
import Header from "./Header";
import Form from "./Form";
import Cart from "./Cart"
import BookDetail from "./BookDetail"

function App() {
const [books, setBooks] = useState([])
const [genres, setGenres] = useState([])
const [bookList, setBookList] = useState(books)
const [cart, setCart] = useState([])
const [edit, setEdit] = useState(null)
const [formData, setFormData] = useState({
  title:'',
  author: '',
  genre: '',
  image: '',
  price: '',
  liked: false
}) 


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

const postBooks = (book) => {
  fetch("http://localhost:4000/books",{
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(book)
  })
  .then(res => res.json())
  .then(data => {
    setBookList([data, ...bookList])
  })
}


const patchBooks = (book) => {
  fetch(`http://localhost:4000/books/${book.id}`,{
    method:'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(book)
  })
  .then(res => res.json())
  .then(data => {
    const idx = bookList.findIndex(bookListBook => bookListBook.id === data.id)
    const bookListCopy = [...bookList]
    bookListCopy[idx] = data
    setBookList(bookListCopy)
  })
}

const deleteBook = (deletedBook) => {
  fetch(`http://localhost:4000/books/${deletedBook.id}`,{
    method:'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(() => {
    //TODO: redirect back to the books route
    const tempBooks = bookList.filter(book => book.id !== deletedBook.id)
    setBookList(tempBooks)
  })
}


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


//Creates a book
const handleSubmit = (e) => {
  e.preventDefault()
  postBooks(formData)
}

//Edit Book
const populateForm = (book) => {
  setEdit(book)
  setFormData({
    title:book.title,
    author: book.author,
    genre: book.genre,
    image: book.image,
    price: book.price,
    liked: false
  })
}
//Update Form
const handleUpdateBook = (e) => {
  e.preventDefault()
  formData.id = edit.id
  patchBooks(formData)
}

//Updates a books like 
const handleLike = (book) => {
  const tempBook = {...book, liked: !book.liked}
  patchBooks(tempBook)

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
    <div className="App" >
      {cart.length > 0?<Cart cart={cart}/>:null}
      <Header cart={cart} storeName="Barnes and Flatiron" slogan="Live Love Code Bake Repeat"/>
    <Switch>
      <Route path="/books/new">
        <Form formData={formData} handleChange={handleChange} handleSubmit={edit? handleUpdateBook:handleSubmit}/>
      </Route>
      <Route path="/books/:id">
       <BookDetail deleteBook={deleteBook} populateForm={populateForm} handleLike={handleLike}/>
      </Route>
      <Route exact path="/books">
        <BookContainer addToCart={addToCart} bookList={bookList} genreList={genres} handleGenre={handleGenre} handleLike={handleLike}/>
      </Route>
      <Route>
        <div>404</div>
      </Route>
    </Switch>
    </div>
  );
}

export default App;


//TODO: import styled components