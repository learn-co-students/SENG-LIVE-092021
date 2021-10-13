function BookCard({bookData:{title, author, genre, price, image="https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg"}}){
    //TODO: Destructure props to dry our code
    return(
        <>
            <h1>{title}</h1>
            <p>{author}</p>
            <p>{genre}</p>
            <p>${price}</p>
            <img src={image}></img>
        </>
    )
}

export default BookCard