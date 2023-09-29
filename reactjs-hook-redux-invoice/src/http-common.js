import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
        "Content-type": "application/json"
    }
});