import BookContainer from "./BookContainer";
import Form from "./Form";
import Header from "./Header";
import {books, genres} from "../data/data"

function App() {
  // console.log(data)
  //TODO: Add Header, Genre, Form
  //TODO: Pass BookContainer our book data through props
  console.log(books, genres)
  return (
    <div className="App">
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code Bake"/>
      <Form/>
      <BookContainer  booksList={books} genresList={genres}/>
  
    </div>
  );
}

export default App;
