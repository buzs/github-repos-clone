import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import RepoItem from '../components/RepoItem'
import Tab from '../components/Tab'
import Search from '../components/Search'
import User from '../templates/User'



const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query
  const [data, setData] = useState<any>();

  useEffect(() => {
    if (username) {
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
    }
  }, [username]);

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Tab mode='desktop' repositoriesLength={data.user?.public_repos} />
      <User user={data.user} repos={data.repos} >
        <div>
          <Tab mode='mobile' repositoriesLength={data.user?.public_repos} />
          <Search />
          {data?.repos?.map((repo: { name: string; description: string; topics?: string[] | undefined; stargazers_count: number; forks: number; fork: boolean; html_url: string; full_name: string; language: string; license?: { name: string } | undefined; updated_at: string; pushed_at: string }) => (<RepoItem repo={repo} />))}
        </div>
      </User>
    </>
  )
}

export default UserProfile