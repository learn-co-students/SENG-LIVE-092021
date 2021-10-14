import {useState} from 'react'
function BookCard({book:{title,author,price=10,genre,image="https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg"}}){
//TODO: control like with state
//Use state returns an array with 2 elements
//stateObj/stateVar, setStateFoo
const [like, setLike] = useState(false)

const handleClick = () => {
    console.log(like)
    setLike((currentLike) => !currentLike)
  
    console.log(like)
}

    return(
        <div style={{border:"solid", width:"300px", margin:"auto"}}>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>${price}</p>
            <p>{genre}</p>
            <p onClick={handleClick}>{like?'♥':'♡'}</p>
            <img  style={{width:"200px"}}src={image} />
        </div>
    )
}

export default BookCard

