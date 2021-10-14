import { genres } from "../data/data"

function Genre({genreList}){
    return(
        <div style={{display:"flex"}}>
        {genreList.map(genre => <div style={{margin:"auto"}}>{genre.toUpperCase()}</div>)}
        </div>
    )
}
export default Genre