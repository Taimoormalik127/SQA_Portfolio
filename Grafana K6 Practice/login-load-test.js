import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
    stages: [
        { duration: '30s', target: 10 },
        { duration: '1m',  target: 10 },
        { duration: '10s', target: 0  },
    ]
}

const url     = 'https://quickpizza.grafana.com/api/users/token/login'
const headers = { headers: { 'Content-Type': 'application/json' } }

const users = [
    { username: 'default', password: '1234' },
    { username: 'admin',   password: 'admin123' },
    { username: 'user1',   password: 'pass1' },
]

export default function () {
    for (const user of users) {
        const res = http.post(url, JSON.stringify(user), headers)
        console.log(`User: ${user.username} | Status: ${res.status}`)
        check(res, { 
            'status 200': (r) => r.status === 200,
            'no server crash': (r) => r.status !== 500
        })
        sleep(1)
    }
}