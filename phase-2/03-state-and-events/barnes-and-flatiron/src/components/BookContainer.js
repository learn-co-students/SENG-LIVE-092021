import BookCard from "./BookCard"
import Genre from "./Genre";

function BookContainer(props){
    return(
        <>
            {/* <Genre genreList={props.genreList}/> */}
            <div style={{display:"flex", flexWrap:"wrap"}}>
            {props.bookList.map(bookObj => <BookCard book={bookObj}/>)}
            </div>
        </>
    )
}

export default BookContainer