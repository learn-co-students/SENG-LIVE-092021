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
            aria-required="true"
            ></input>
            <label>Author</label>
            <input
            type="text"
            name="author"
            aria-label="title"
            aria-required="true"
            ></input>
            <label>Genre</label>
            <input
            type="text"
            name="genre"
            aria-label="title"
            aria-required="true"
            ></input>
            <label>Image</label>
            <input
            type="text"
            name="image"
            aria-label="title"
            aria-required="true"
            ></input>
            <label>Price</label>
            <input
            type="text"
            name="price"
            aria-label="title"
            aria-required="true"
            ></input>
            <label>Description</label>
            <textarea
            type="text"
            name="description"
            aria-label="title"
            aria-required="true"
            ></textarea>
            <input
            type="submit"
            ></input>

        </form>
    )
}
export default Form