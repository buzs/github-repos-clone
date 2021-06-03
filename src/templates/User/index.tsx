import ProfileInfo from "../../components/ProfileInfo"
import * as S from "./styles"

type UserProps = {
    user: any,
    repos: any
}

const User: React.FC<UserProps> = ({ user, children }) => (
    <S.Container>
        <S.LeftBox>
            <ProfileInfo user={user} />
        </S.LeftBox>
        <S.Content>
            {children}
        </S.Content>
    </S.Container>
)

export default User;