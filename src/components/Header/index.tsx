import * as S from './styles'


const Header: React.FC = () => {
    return (
        <S.Container>
            <S.GitIcon />
            <S.NavMenu>
                <S.SearchBar
                    placeholder="Search or jump to..."
                    // value={search}
                    // onChange={(e) => setSearch(e.currentTarget.value)}
                    // onKeyDown={handleSubmit}
                />
                <S.NavLink>Pull requests</S.NavLink>
                <S.NavLink>Issues</S.NavLink>
                <S.NavLink>Marketplace</S.NavLink>
                <S.NavLink>Explore</S.NavLink>
            </S.NavMenu>
        </S.Container>
    )  
}

export default Header;