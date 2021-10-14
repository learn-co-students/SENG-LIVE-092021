import BookContainer from "./BookContainer";
import Header from "./Header";
import Form from "./Form";
import{books, genres} from "../data/data.js"
function App() {
  //TODO: Add Header, Genre, Form
  //Q: what will need access to our data?
  //TODO: Pass BookContainer our book data through props
  //TODO: Pass Genre, the data for genres 
  return (
    <div className="App" style={{textAlign:"center"}}>
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code Bake Repeat"/>
      <Form />
      <BookContainer bookList={books} genreList={genres}/>
    </div>
  );
}

export default App;


