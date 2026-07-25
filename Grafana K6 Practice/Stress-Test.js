import http from 'k6/http'

export const options = {
     stages: [
          { duration: '30s', target: 50 }, // Ramp up to 50 users over 30 seconds
          { duration: '1m', target: 50 },  // Stay at 50 users for 1 minutes
          { duration: '30s', target: 0 }   // Ramp down to 0 users over 30 seconds
     ]
}

export default function() {
     // http.get('https://test.k6.io')
        http.get('https://www.facebook.com/')
}