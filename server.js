import dotenv from 'dotenv'
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const app = express()
app.use(express.json())
dotenv.config()

const posts = [
    { username: 'jai', title: 'post1' },
    { username: 'shubham', title: 'post2' }
]
const users = []

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

app.get('/login', (req, res) => {
    //authenticate

})

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const encryptedPassword = await bcrypt.hash(req.body.password, salt)
        console.table({ salt: salt, encryptedPassword: encryptedPassword })
        const user = { username: req.body.username, password: encryptedPassword }
        users.push(user)
        res.status(201).send('user created succesfully')
    } catch {
        res.status(500).send('user not created')
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.username === req.body.username)
    if (user == null) {
        return res.status(400).send('cannot find user.')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const user1 = { username: req.body.username }
            const accessToken = jwt.sign(user1, process.env.ACCESS_SECRET_KEY)
            res.json({ accessToken: accessToken })
        }
        else {
            res.send('not allowed')
        }
    } catch {
        res.status(500).send('internal server error')
    }
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(3000)

/*
* ! not used
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});*/

