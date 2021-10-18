import BookCard from "./BookCard"
import Genre from "./Genre";

function BookContainer({genreList, bookList, handleGenre, handleLike}){
    //TODO: Create a search form that will filter our current list of books
    return(
        <div style={{background:"CadetBlue", padding:"19px"}}>
            <input value="search..." style={{width:"100%"}}></input>
            <Genre genreList={genreList} handleGenre={handleGenre}/>
            <div style={{display:"flex", flexWrap:"wrap"}}>
            {bookList.map(bookObj => <BookCard book={bookObj} handleLike={handleLike}/>)}
            </div>
        </div>
    )
}

export default BookContainer