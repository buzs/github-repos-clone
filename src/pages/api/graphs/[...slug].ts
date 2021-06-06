export default async function handler(req, res) {
  const { slug } = req.query

  const response = await fetch(`https://github.com/${slug[0]}/${slug[1]}/graphs/participation?w=155&h=28&type=sparkline`)

  const text = await response.text()

  res.end(text)
}