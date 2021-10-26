import {Link} from 'react-router-dom'
function BookCard({addToCart,book, book:{title,price=10}}){
//TODO: Refactor book card to be limited book information that uses LINK to render a detailed book component.

    return(
        <div >
            <Link to={`/books/${book.id}`}><h3>{title}</h3></Link>
            <p>${price}</p>
            <button onClick={() => addToCart(book)}>Add To Cart</button>
          
        </div>
    )
}

export default BookCard

