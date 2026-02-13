import http from 'node:http'

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === "GET" && url === "/users") {
    return res.end('Users List')
  }

  if (method === "POST" && url === "/users") {
    return res.end('Create User')
  }

  return res.end('Hello World')

})

server.listen(3333, () => {
  console.log('Server is running on http://localhost:3333')
})



