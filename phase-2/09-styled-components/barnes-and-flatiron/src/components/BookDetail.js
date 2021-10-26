import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
function BookDetail({deleteBook, populateForm, handleLike}){
    const [book, setBook] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const id = useParams().id
//TODO: Use Params to access the state of the router  
    useEffect(() => {
        fetch(`http://localhost:4000/books/${id}`)
        .then(res => res.json())
        .then(data => {
            setBook(data)
            setIsLoaded(true)
        })
    },[])


    if(!isLoaded) return <h2>Loading....</h2>

    const {title, author, price, genre, image="https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg", liked} = book

    return(
        <div >
            <h3>{title}</h3>
            <p>{author}</p>
            <p>${price}</p>
            <p>{genre}</p>
            <p onClick={() => handleLike(book)}>{liked?'♥':'♡'}</p>
            <button onClick={() => populateForm(book)}>Edit</button>
            <button onClick={() => deleteBook(book)}>Delete</button>
            <img  style={{width:"200px"}}src={image} />
        </div>
    )
}

export default BookDetail

