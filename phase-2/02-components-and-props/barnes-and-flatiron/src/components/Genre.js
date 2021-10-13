
function Genre(props){
    console.log('In Genre:', props)
    return(
        <>
            {props.genresList.map(genre => <div key={genre}>{genre}</div>)}
        </>
    )
}
export default Genre