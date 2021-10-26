import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
function Header({cart, slogan, storeName}){
    return(
        <>
        <HeaderContainer>
            <h1 >{storeName}</h1>
            <h3>{slogan}</h3>
        </HeaderContainer>
            <NavMenu>
                <li><NavLink to="/books">Books</NavLink></li>
                <li><NavLink to="/books/new">New Book</NavLink></li>
                <li> 🛒 {cart.length}</li>
            </NavMenu>
        </>
    );
};
export default Header;

const HeaderContainer = styled.div` 
    background-color:${props => props.theme.colors.primary};
    font-family: ${props => props.theme.font.primary};
    color:#cededc;
    text-align:center; 
    h1, h3{
        margin:0;
        padding:0;
    }
    h3{
        font-style: italic;
    }
`

const NavMenu = styled.ul`
    display:flex;
    justify-content:space-around;
    li{
        list-style: none;
        a{
            color:grey;
            text-decoration: none;
        }
    }
`
