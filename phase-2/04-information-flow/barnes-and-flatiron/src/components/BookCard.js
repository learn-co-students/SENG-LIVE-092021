import {useState} from 'react'
function BookCard({book:{title,author,price=10,genre,image="https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg"}}){


    return(
        <div style={{border:"solid", width:"300px", margin:"auto"}}>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>${price}</p>
            <p>{genre}</p>
            <p>'♥'</p>
            <img  style={{width:"200px"}}src={image} />
        </div>
    )
}

export default BookCard

