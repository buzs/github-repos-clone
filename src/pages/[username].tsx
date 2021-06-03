import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'



const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query
  const [data, setData] = useState<any>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async responses => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' })
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      const shuffledRepos = repos.sort(() => 0.50 - Math.random());
      const slicedRepos = shuffledRepos.slice(0, 6);

      setData({
        user,
        repos: slicedRepos,
      });
    });
  }, [username]);

  return (
    <div>
      <main>
        <h1>Start - {username}</h1>
      </main>

      <pre>
        {JSON.stringify(data, null, 2 )}
      </pre>

      <Footer />
    </div>
  )
}

export default UserProfile