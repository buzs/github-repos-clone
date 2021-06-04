import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import RepoItem from '../components/RepoItem'
import User from '../templates/User'



const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query
  const [data, setData] = useState<any>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?sort=pushed`),
    ]).then(async responses => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' })
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      setData({
        user,
        repos
      });
    });
  }, [username]);

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>
  }

  return (
    <User user={data.user} repos={data.repos} >
      <div>
        {data?.repos?.map((repo: { name: string; description: string; topics?: string[] | undefined; stargazers_count: number; forks: number; fork: boolean; html_url: string; full_name: string; language: string; license?: { name: string } | undefined; updated_at: string; pushed_at: string }) => (<RepoItem repo={repo} />))}
      </div>
    </User>
  )
}

export default UserProfile