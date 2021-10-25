import BookCard from "./BookCard"
import Genre from "./Genre";

function BookContainer({ addToCart, genreList, bookList, handleGenre, handleLike}){
    return(
        <div style={{background:"CadetBlue", padding:"19px"}}>
            <Genre genreList={genreList} handleGenre={handleGenre}/>
            <div style={{display:"flex", flexWrap:"wrap"}}>
            {bookList.map(book => <BookCard key={book.title}  book={book} addToCart={addToCart}  handleLike={handleLike}/>)}
            </div>
        </div>
    )
}

export default BookContainer