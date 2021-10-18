import BookCard from "./BookCard"
import Genre from "./Genre";

function BookContainer({populateForm, genreList, bookList, handleGenre, handleLike}){
    return(
        <div style={{background:"CadetBlue", padding:"19px"}}>
            <Genre genreList={genreList} handleGenre={handleGenre}/>
            <div style={{display:"flex", flexWrap:"wrap"}}>
            {bookList.map(bookObj => <BookCard populateForm={populateForm} book={bookObj} handleLike={handleLike}/>)}
            </div>
        </div>
    )
}

export default BookContainer