import * as S from './styles'

const Footer: React.FC = () => {
    return (
        <S.Container>
            <S.NavList>
                © 2021 GitHub, Inc. 
                <li>Terms</li>
                <li>Privacy</li>
                <li>Security</li>
                <li>Status</li>
                <li>Docs</li>
            </S.NavList>
            <S.GitIcon />
            <S.NavList>
                <li>Contact Github</li>
                <li>Pricing</li>
                <li>API</li>
                <li>Training</li>
                <li>Blog</li>
                <li>About</li>
            </S.NavList>
        </S.Container>
    )  
}

export default Footer;