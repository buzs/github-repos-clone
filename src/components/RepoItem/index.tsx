import { useEffect, useState } from 'react'
import { timeAgo } from '../../utils/date'
import { Link } from '../Footer/styles'
import { Law, Star, StarFill, RepoForked } from '@styled-icons/octicons'
import * as S from './styles'

type RepoItemProps = {
    repo: {
        name: string,
        description: string;
        topics?: string[];
        stargazers_count: number;
        forks: number;
        fork: boolean;
        html_url: string;
        full_name: string;
        language: string;
        license?: {
            name: string
        }
        updated_at: string;
        pushed_at: string;
    }
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
    const [star, setStar] = useState(false);
    const [topics, setTopics] = useState<string[]>([
        "omnistack-week-11",
        "react",
        "react-native",
        "sqlite3"
    ])

    return (
        <S.Container>
            <S.InfoBox>
                <S.Title>
                    <a href={repo.html_url}>
                        {repo.name}
                    </a>
                </S.Title>
                {
                    repo.fork ? (
                        <S.SubTitle>
                            Forked from 'not in api'
                        </S.SubTitle>
                    ) : null
                }
                <S.Description>
                    {repo.description}
                </S.Description>
                <S.Topics>
                    {topics?.map(topic => <S.Topic key={topic}>{topic}</S.Topic>)}
                </S.Topics>
                <S.SecondaryBox>

                    {
                        repo.language ? (
                            <S.Language language={repo.language}>
                                {repo.language}
                            </S.Language>
                        ) : null
                    }

                    {
                        repo.stargazers_count > 0 ? (
                            <S.Stars>
                                <Star width={16} /> {repo.stargazers_count}
                            </S.Stars>
                        ) : null
                    }

                    {
                        repo.fork ? (
                            <S.Fork>
                                <RepoForked width={16} /> {repo.forks}
                            </S.Fork>
                        ) : null
                    }

                    {
                        repo.license ? (
                            <S.License>
                                <Law width={16} />{repo.license?.name}
                            </S.License>
                        ) : null
                    }

                    <S.Updated>
                        Updated {timeAgo(Date.now(), new Date(repo.pushed_at).getTime())}
                    </S.Updated>

                </S.SecondaryBox>
            </S.InfoBox>
            <S.LeftBox>
                <S.Button onClick={()=> setStar(!star)}>{star ? <><StarFill width={16} /> Unstar</> : <><Star width={16} /> Star</> }</S.Button>
            </S.LeftBox>
        </S.Container>
    )  
}

export default RepoItem;