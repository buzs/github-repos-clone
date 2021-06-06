import { useEffect, useState } from 'react'
import { timeAgo } from '../../utils/date'
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

const random = (min: number, max: number) => {
    return min + Math.random() * (max - min);
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
    let items = ["web","newtech","2021","challenge"];
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items.splice(randomIndex, random(0, items.length));

    
    const [star, setStar] = useState(false);
    const [stars, setStars] = useState(repo?.stargazers_count || 0);
    const [topics, setTopics] = useState<string[]>(randomItem)
    const [graph, setGraph] = useState<any>();
    
    useEffect(() => {
        if (repo?.full_name) {
            fetch(`/api/graphs/${repo.full_name}`).then(response => {
                response.text().then(text => setGraph(text))
            })
        }
    }, [repo.full_name])

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
                        stars > 0 ? (
                            <S.Stars>
                                <Star width={16} /> {stars}
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
                <S.Button onClick={()=> {
                    setStar(!star)
                    setStars(star ? stars - 1 : stars + 1)
                }}>{star ? <><StarFill width={16} /> Unstar</> : <><Star width={16} /> Star</> }</S.Button>
                <S.Graph>
                    <div dangerouslySetInnerHTML={{__html: graph}}></div>
                </S.Graph>
            </S.LeftBox>
        </S.Container>
    )  
}

export default RepoItem;