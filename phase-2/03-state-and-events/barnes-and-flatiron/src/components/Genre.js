import { genres } from "../data/data"

function Genre({genreList}){
    //TODO:Make a div for every genre in our list
    return(
        <div style={{display:"flex"}}>
        {genreList.map(genre => <div style={{margin:"auto"}}>{genre.toUpperCase()}</div>)}
        </div>
    )
}
export default Genre