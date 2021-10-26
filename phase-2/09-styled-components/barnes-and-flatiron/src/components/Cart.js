function Cart({cart}){

    return (
        <>
        <div>{cart.map(item => <div>{item.title} : ${item.price}</div>)}</div>
        <div>Total: {cart.reduce((a,b)=>{
        return a + parseInt(b.price)},0)}</div>
        </>
    )
}

export default Cart