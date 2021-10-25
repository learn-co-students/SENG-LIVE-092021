function BookCard({deleteBook, addToCart, populateForm, handleLike, book, book:{liked, title,author,price=10,genre,image="https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg"}}){
//TODO: Refactor book card to be limited book information that uses LINK to render a detailed book component.

    return(
        <div style={{border:"solid", width:"300px", margin:"auto", background:"white"}}>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>${price}</p>
            <p>{genre}</p>
            <p onClick={() => handleLike(book)}>{liked?'♥':'♡'}</p>
            <button onClick={() => addToCart(book)}>Add To Cart</button>
            <button onClick={() => populateForm(book)}>Edit</button>
            <button onClick={() => deleteBook(book)}>Delete</button>
            <img  style={{width:"200px"}}src={image} />
        </div>
    )
}

export default BookCard

