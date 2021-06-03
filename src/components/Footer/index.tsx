import * as S from './styles'
import {Github} from '@styled-icons/boxicons-logos/Github'

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
            <Github width={45} />
            <S.NavList>
                <li>Contact Github</li>
                <li>Pricing</li>
                <li>API</li>
                <li>Training</li>
                <li>Blog</li>
            </S.NavList>
        </S.Container>
    )  
}

export default Footer;