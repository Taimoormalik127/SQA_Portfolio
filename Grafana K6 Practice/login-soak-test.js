import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
    stages: [
        { duration: '2m',  target: 10 },
        { duration: '10m', target: 10 },
        { duration: '2m',  target: 0 },
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
        check(res, { 
            'server responding': (r) => r.status !== 0,
            'no server crash': (r) => r.status !== 500 
        })
        sleep(1)
    }
}