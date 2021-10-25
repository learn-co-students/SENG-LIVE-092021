function Header({cart, slogan, storeName}){
//TODO: Use NavLink to link to different pages 
    return(
        <>
            <h1 style={{background:"CadetBlue", padding:"19px"}}>{storeName}</h1>
            <h3>{slogan}</h3>
            <h3>Cart: {cart.length}</h3>
        </>
    )
}
export default Header