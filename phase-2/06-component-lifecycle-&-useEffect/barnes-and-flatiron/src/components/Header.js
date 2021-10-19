function Header(props){
    return(
        <>
            <h1 style={{background:"CadetBlue", padding:"19px"}}>{props.storeName}</h1>
            <h3>{props.slogan}</h3>
        </>
    )
}
export default Header