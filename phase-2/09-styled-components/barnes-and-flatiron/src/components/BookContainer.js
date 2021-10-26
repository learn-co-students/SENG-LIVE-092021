import BookCard from "./BookCard"
import Genre from "./Genre";
import styled from 'styled-components'
function BookContainer({ addToCart, genreList, bookList, handleGenre, handleLike}){
    return(
        <div >
            <Genre genreList={genreList} handleGenre={handleGenre}/>
            <BookList>
            {bookList.map(book => <BookCard key={book.title}  book={book} addToCart={addToCart}  handleLike={handleLike}/>)}
            </BookList>
        </div>
    )
}

export default BookContainer

const BookList = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    div:hover{
        width:410px;
        height:160px;
    }
`