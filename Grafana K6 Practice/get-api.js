import http from 'k6/http'
import { check } from 'k6'

export const options = {
     vus: 10,
     iterations: 20
}

const params = {
    headers: {
        'Authorization':'Bearer aa2c5b8f1e357f6d26bfd4de8d361f2b9585e51c9a2f8b56a76521d5f890b517'
    }
}

const url = 'https://gorest.co.in/public/v2/users'

/* let headers_api = {
    'Authorization':'Bearer aa2c5b8f1e357f6d26bfd4de8d361f2b9585e51c9a2f8b56a76521d5f890b517'
} */

export default function() {
    const response = http.get(url, params)
    // const response = http.get('https://gorest.co.in/public/v2/users', {headers: headers_api})

    check (response, {
        'status code validation': (response) => response.status === 200
    })
}

