// Nomenclatura de variáveis

// status e seguidores vindos da memória
const mentoryByFollowingFromMemory = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getProfileFromGithub(req, res) {
  const usernameFromQuery = String(req.query.username)

  if (!usernameFromQuery) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const response = await fetch(`https://api.github.com/users/${usernameFromQuery}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${usernameFromQuery}" not found`
    })
  }

  const userFromGithub = await response.json()

  const orderByFollowingList = mentoryByFollowingFromMemory.sort((a, b) =>  b.followers - a.followers); 

  const categoryUserFromGithub = orderByFollowingList.find(i => userFromGithub.followers > i.followers)

  const result = {
    userFromGithub,
    category: categoryUserFromGithub.title
  }

  return result
}

getProfileFromGithub({ query: {
  username: 'josepholiveira'
}}, {})