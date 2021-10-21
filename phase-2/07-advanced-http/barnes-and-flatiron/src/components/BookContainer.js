import BookCard from "./BookCard"
import Genre from "./Genre";

function BookContainer({deleteBook, addToCart, populateForm, genreList, bookList, handleGenre, handleLike}){
    return(
        <div style={{background:"CadetBlue", padding:"19px"}}>
            <Genre genreList={genreList} handleGenre={handleGenre}/>
            <div style={{display:"flex", flexWrap:"wrap"}}>
            {bookList.map(book => <BookCard key={book.title} deleteBook={deleteBook} book={book} addToCart={addToCart} populateForm={populateForm} handleLike={handleLike}/>)}
            </div>
        </div>
    )
}

export default BookContainer