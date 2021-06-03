import { Link } from '../Footer/styles'
import * as S from './styles'

type ProfileInfoProps = {
    user : {
        login: string;
        name: string;
        avatar_url: string;
        bio?:string;
        followers: number;
        following: number;
        company?: string;
        location?: string;
        email?: string;
        blog?: string;
    }
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ user }) => {
    return (
        <S.Container>
            <S.AvatarBox>
                <S.Avatar src={user.avatar_url} alt={user.login} />
                <S.AvatarInfo>
                    <strong>{user.name}</strong>
                    <span>{user.login}</span>
                    <p>{user.bio}</p>
                </S.AvatarInfo>
            </S.AvatarBox>

            {user.name}
        </S.Container>
    )  
}

export default ProfileInfo;