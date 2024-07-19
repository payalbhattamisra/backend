require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubdData={
  "login": "payalbhattamisra",
  "id": 147300476,
  "node_id": "U_kgDOCMegfA",
  "avatar_url": "https://avatars.githubusercontent.com/u/147300476?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/payalbhattamisra",
  "html_url": "https://github.com/payalbhattamisra",
  "followers_url": "https://api.github.com/users/payalbhattamisra/followers",
  "following_url": "https://api.github.com/users/payalbhattamisra/following{/other_user}",
  "gists_url": "https://api.github.com/users/payalbhattamisra/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/payalbhattamisra/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/payalbhattamisra/subscriptions",
  "organizations_url": "https://api.github.com/users/payalbhattamisra/orgs",
  "repos_url": "https://api.github.com/users/payalbhattamisra/repos",
  "events_url": "https://api.github.com/users/payalbhattamisra/events{/privacy}",
  "received_events_url": "https://api.github.com/users/payalbhattamisra/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Payal Bhattamisra",
  "company": null,
  "blog": "",
  "location": "berhampur",
  "email": null,
  "hireable": null,
  "bio": "Computer Science Engineering Student.",
  "twitter_username": null,
  "public_repos": 18,
  "public_gists": 0,
  "followers": 2,
  "following": 2,
  "created_at": "2023-10-08T06:43:19Z",
  "updated_at": "2024-07-19T05:22:41Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res) => {
 res.send("payalmisra")
})
app.get('/login',(req,res)=>{
 res.send("<h1>please login the app</h1>")
})
app.get('/youtube',(req,res)=>{
 res.send("<h2>coding with payal</h2>")
})
app.get('/github',(req,res)=>{
  res.json(githubdData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})