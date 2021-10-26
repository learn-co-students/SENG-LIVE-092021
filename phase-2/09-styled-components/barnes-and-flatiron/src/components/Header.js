import {NavLink} from 'react-router-dom'
function Header({cart, slogan, storeName}){
//TODO: Use NavLink to link to different pages 
    return(
        <>
            <h1 >{storeName}</h1>
            <h3>{slogan}</h3>
            <h3>Cart: {cart.length}</h3>
            <ul >
                <NavLink to="/books">Books</NavLink>
                <NavLink to="/books/new">New Book</NavLink>
            </ul>
        </>
    )
}
export default Header