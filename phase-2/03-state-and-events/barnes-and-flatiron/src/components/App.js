import BookContainer from "./BookContainer";
import Header from "./Header";
import Form from "./Form";
import{books, genres} from "../data/data.js"
function App() {
 
  return (
    <div className="App" style={{textAlign:"center"}}>
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code Bake Repeat"/>
      <Form />
      <div style={{display:"flex"}}>
        {genres.map(genre => <div  style={{margin:"auto"}}>{genre.toUpperCase()}</div>)}
      </div>
      <BookContainer bookList={books} genreList={genres}/>
    </div>
  );
}

export default App;


