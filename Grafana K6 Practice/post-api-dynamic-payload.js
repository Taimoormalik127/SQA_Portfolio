import http from 'k6/http'
import { check } from 'k6'
import {randomString} from 'https://jslib.k6.io/k6-utils/1.2.0/index.js'
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.0.1/faker.min.js' // Import faker library for generating random data

export const options = {
    vus: 2,
    iterations: 4
}

const url = 'https://jsonplaceholder.typicode.com/posts'
const payload = {
    title: faker.name.findName(),
    // title: faker.internet.email(), // Generate a random email for the title
    //title: 'OK-' + randomString(5) + '- Done', // Generate a random string for the title
    body: 'OK-' + randomString(3) + '- Done', // Generate a random string for the body
    userId: '1'
}

export default function() {
    const response = http.post(url, payload)
    console.log("Payload =", payload)
    console.log("Response =", response.body)

    check (response, { 
        'status is 201': (response) => response.status === 201,
        'response ID validation': (response) => response.body.includes('id')
     })
}
