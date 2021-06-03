import * as S from './styles'


const Header: React.FC = () => {
    return (
        <S.Container>
            <S.GitIcon />
            <S.SearchBar
                placeholder="Search or jump to..."
            />
        </S.Container>
    )  
}

export default Header;