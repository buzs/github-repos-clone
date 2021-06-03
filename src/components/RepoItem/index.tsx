import { Link } from '../Footer/styles'
import * as S from './styles'

type RepoItemProps = {
    repo: {
        name: string,
        description: string;
        topics?: string[];
        stargazers_count: number;
        html_url: string;
        license?: {
            name: string
        }
        updated_at: string;
    }
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
    return (
        <S.Container>
            <S.InfoBox>
                <S.Title>
                    <a href={repo.html_url}>
                        {repo.name}
                    </a>
                </S.Title>
                <S.Description>
                    {repo.description}
                </S.Description>
                <S.Topics>
                    {repo.topics?.map(topic => <S.Topic key={topic}>{topic}</S.Topic>)}
                </S.Topics>
                <S.SecondaryBox>
                    <S.Stars>
                        {repo.stargazers_count}
                    </S.Stars>

                    <S.License>
                        {repo.license?.name}
                    </S.License>

                    <S.Updated>
                        {repo.updated_at}
                    </S.Updated>

                </S.SecondaryBox>
            </S.InfoBox>
            <S.LeftBox>
                <S.Button>Star</S.Button>
            </S.LeftBox>
        </S.Container>
    )  
}

export default RepoItem;