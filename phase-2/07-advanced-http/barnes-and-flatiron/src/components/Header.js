function Header({cart, slogan, storeName}){
    return(
        <>
            <h1 style={{background:"CadetBlue", padding:"19px"}}>{storeName}</h1>
            <h3>{slogan}</h3>
            <h3>Cart: {cart.length}</h3>
        </>
    )
}
export default Header