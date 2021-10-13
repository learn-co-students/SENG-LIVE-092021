import Genre from "./Genre";
import BookCard from "./BookCard";


function BookContainer(props){
    console.log(props)
    //TODO: Render BookCard dynamically for every book in props
    return(
        <>
            <Genre genresList={props.genresList}/>
            {props.booksList.map(book => <BookCard key={book.title} bookData={book}/>)}
        
        </>
    )
}

export default BookContainer