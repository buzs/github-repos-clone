import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import * as S from './styles'

export type HeaderProps = {
    isOn: boolean;
    handleToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isOn, handleToggle }) => {
    const router = useRouter()
    const [search, setSearch] = useState<string>();

    const handleEnter = () => {
        console.log('search')
        router.push(`/${search}`)
    }

    return (
        <S.Container>
            <S.GitIcon />
            <S.NavMenu>
                <S.SearchBar
                    placeholder="Search or jump to..."
                    defaultValue={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleEnter()}
                />
                <S.NavLink>Pull requests</S.NavLink>
                <S.NavLink>Issues</S.NavLink>
                <S.NavLink>Marketplace</S.NavLink>
                <S.NavLink>Explore</S.NavLink>
            </S.NavMenu>
            <S.Switch>
                <input checked={isOn} onChange={handleToggle} type="checkbox" name="switch" id="switch" />
                <label style={{ background: isOn ? '#c4c4c4' : '#343434' }} htmlFor="switch">
                    <span />
                </label>
            </S.Switch>
        </S.Container>
    )  
}

export default Header;