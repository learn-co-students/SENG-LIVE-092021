import {useState} from 'react'
function BookCard({handleLike, book, book:{liked, title,author,price=10,genre,image="https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg"}}){


    return(
        <div style={{border:"solid", width:"300px", margin:"auto", background:"white"}}>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>${price}</p>
            <p>{genre}</p>
            <p onClick={() => handleLike(book)}>{liked?'♥':'♡'}</p>
            <img  style={{width:"200px"}}src={image} />
        </div>
    )
}

export default BookCard

