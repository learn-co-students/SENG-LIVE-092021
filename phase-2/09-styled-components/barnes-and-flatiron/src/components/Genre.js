import styled from "styled-components"
function Genre({genreList, handleGenre}){
    return(
        <GenreContainer >
        {genreList.map(genre => <div onClick={() => handleGenre(genre)} style={{margin:"auto"}}>{genre.toUpperCase()}</div>)}
        </GenreContainer>
    )
}
export default Genre

const GenreContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    color:grey;
    border-top: 3px solid grey;
    max-width: 1500px;
    margin:auto;
    div{
        
        border-right: 1px solid grey;
        padding-left: 2em;
        padding-right: 2em;
    }
    div:last-child{
        border:none;
    }

`