import http from 'k6/http'
import { check } from 'k6'

export const options = {
    vus: 1,
    iterations: 1  // run just once
}

export default function () {
    const res = http.post(
        'https://quickpizza.grafana.com/api/users/token/login',
        JSON.stringify({ username: 'default', password: '1234' }),
        { headers: { 'Content-Type': 'application/json' } }
    )
    console.log('Status:', res.status)
    console.log('Body:', res.body)
    check(res, { 'status 200': (r) => r.status === 200 })
}