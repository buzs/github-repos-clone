import * as S from './styles'

const Search: React.FC = () => {
    return (
        <S.Container>
           <S.Input placeholder='Find a repository...' />
        </S.Container>
    )  
}

export default Search;