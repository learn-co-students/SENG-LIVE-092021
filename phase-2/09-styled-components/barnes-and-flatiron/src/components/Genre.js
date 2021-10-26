function Genre({genreList, handleGenre}){
    return(
        <div >
        {genreList.map(genre => <div onClick={() => handleGenre(genre)} style={{margin:"auto"}}>{genre.toUpperCase()}</div>)}
        </div>
    )
}
export default Genre