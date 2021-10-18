import BookCard from "./BookCard"
import Genre from "./Genre";

function BookContainer({genreList, bookList, handleGenre, handleLike}){
    return(
        <div style={{background:"CadetBlue", padding:"19px"}}>
            <Genre genreList={genreList} handleGenre={handleGenre}/>
            <div style={{display:"flex", flexWrap:"wrap"}}>
            {bookList.map(bookObj => <BookCard book={bookObj} handleLike={handleLike}/>)}
            </div>
        </div>
    )
}

export default BookContainer