import { Twitter } from '@styled-icons/boxicons-logos'
import { People, Location, Link, Organization } from '@styled-icons/octicons'
import { useState } from 'react'
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
        twitter_username?: string;
    }
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ user }) => {
    const [follow, setFollow] = useState(false);

    return (
        <S.Container>
            <S.AvatarBox>
                <S.AvatarProfile>
                    <S.Avatar src={user.avatar_url} alt={user.login} />
                    <h1>
                        <S.AvatarFullname>{user.name}</S.AvatarFullname>
                        <S.AvatarNickname>{user.login}</S.AvatarNickname>
                    </h1>
                </S.AvatarProfile>
                <S.AvatarInfo>
                    <S.AvatarDescription>
                        <S.AvatarBio>{user.bio}</S.AvatarBio>
                        <S.FollowButton onClick={() => setFollow(!follow) }>{follow ? 'Unfollow' : 'Follow'}</S.FollowButton>
                    </S.AvatarDescription>
                </S.AvatarInfo>
                {/* <S.AvatarOrgs>
                    <h2>Organizations</h2>
                </S.AvatarOrgs> */}
                <S.AvatarDetails>
                    <S.AvatarValues>
                        <S.AvatarValue>
                            <People width={20} /> <strong>{user.followers}</strong> followers
                        </S.AvatarValue>
                        <S.AvatarValue>
                            <strong>{user.following}</strong> following
                        </S.AvatarValue>
                    </S.AvatarValues>
                    <S.AvatarDetail>
                        <a href={`http://github.com/${user.company?.substring(1)}`}>
                            <Organization width={18} /><strong>{user.company}</strong>
                        </a>
                    </S.AvatarDetail>
                    {
                        user.location ? (
                            <S.AvatarDetail>
                               <Location width={18} /> {user.location}
                            </S.AvatarDetail>
                        ) : null
                    }
                    {
                        user.email ? (
                            <S.AvatarDetail>
                                {user.email}
                            </S.AvatarDetail>
                        ) : null
                    }
                    <S.AvatarDetail>
                        <Link width={18}/> <a href={`http://${user.blog}`}>{user.blog}</a>
                    </S.AvatarDetail>
                    {
                        user.twitter_username ? (
                            <S.AvatarDetail>
                                <Twitter width={20} />
                                <a href={`https://twitter.com/${user.twitter_username}`}>
                                    @{user.twitter_username}
                                </a>
                            </S.AvatarDetail>
                        ) : null
                    }
                </S.AvatarDetails>
            </S.AvatarBox>
        </S.Container>
    )  
}

export default ProfileInfo;
