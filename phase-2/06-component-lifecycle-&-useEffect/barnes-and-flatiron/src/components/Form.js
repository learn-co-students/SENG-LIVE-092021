import {useState} from 'react'
function Form({formData, handleChange, handleSubmit}){
    // const [formData, setFormData] = useState({
    //     title:'',
    //     author: '',
    //     genre: '',
    //     image: '',
    //     price: '',
    //     liked: false
    // }) 
    // const handleChange = (e) => {
    //     console.log(e.target.name)
    //     console.log(e.target.value)
    //     console.log(formData)
    //     setFormData({...formData, [e.target.name]: e.target.value})
    // }
    //TODO: control the form inputs with local state
 
    //TODO: on submit lift the form data to APP
    
    return(
         <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
            <label>Title</label>
            <input 
            type="text"
            name="title"
            aria-label="title"
            value={formData.title}
            onChange={handleChange}
            ></input>
            <label>Author</label>
            <input
            type="text"
            name="author"
            aria-label="author"
            value={formData.author}
            onChange={handleChange}
            ></input>
            <label>Genre</label>
            <input
            type="text"
            name="genre"
            aria-label="genre"
            value={formData.genre}
           onChange={handleChange}
            ></input>
            <label>Image</label>
            <input
            type="text"
            name="image"
            aria-label="image"
            value={formData.image}
            onChange={handleChange}
            ></input>
            <label>Price</label>
            <input
            type="number"
            name="price"
            aria-label="price"
            value={formData.price}
            onChange={handleChange}
            ></input>
       
            <input
            type="submit"
            ></input>

        </form>
    )
}
export default Form