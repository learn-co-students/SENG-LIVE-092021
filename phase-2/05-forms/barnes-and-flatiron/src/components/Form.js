function Form(){
    //TODO: control the form inputs with local state
    //TODO: on submit lift the form data to APP
    return(
        <form style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
            <label>Title</label>
            <input 
            type="text"
            name="title"
            aria-label="title"
       
            ></input>
            <label>Author</label>
            <input
            type="text"
            name="author"
            aria-label="author"
       
            ></input>
            <label>Genre</label>
            <input
            type="text"
            name="genre"
            aria-label="genre"
       
            ></input>
            <label>Image</label>
            <input
            type="text"
            name="image"
            aria-label="image"
       
            ></input>
            <label>Price</label>
            <input
            type="text"
            name="price"
            aria-label="price"
       
            ></input>
            <input
            type="submit"
            ></input>

        </form>
    )
}
export default Form