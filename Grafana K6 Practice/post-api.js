import http from 'k6/http'
import { check } from 'k6'

export const options = {
     vus: 5,
     duration: '2s'
}

const url = 'https://jsonplaceholder.typicode.com/posts'
const data = open('./payload.json') // Read the payload from the file

const payload = {
    title: 'foo',
    body: 'bar',
    userId: '1'
}

export default function() {
    const params = {
        headers: { 'Content-Type': 'application/json' }
    }
    const response = http.post(url, data, params)
    console.log("Payload =", data)
    console.log("Response =", response.body)
     check (response, { 
        'status is 201': (response) => response.status === 201,
        'response ID validation': (response) => response.body.includes('id')
     })
}


