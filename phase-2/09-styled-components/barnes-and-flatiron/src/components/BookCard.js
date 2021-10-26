import {Link} from 'react-router-dom'
import styled from 'styled-components'
function BookCard({addToCart,book, book:{title,price=10}}){

    return(
        <Card>
            <Link to={`/books/${book.id}`}><h3>{title}</h3></Link>
            <p>${price}</p>
            <button onClick={() => addToCart(book)}>Add To Cart</button>
          
        </Card>
    )
}

export default BookCard

const Card = styled.div`
// x , y , blur radius, spread radius, color
    box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.2);
    margin: 3px;
    width: 300px;
    height: 150px;
    font-size: 12px;
    text-align:center;
    a{
        text-decoration: none;
        color:grey;
    }
    a:hover{
        color:${props => props.theme.colors.primary}
    }

`