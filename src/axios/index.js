import axios from 'axios'

export default function axiosWithAuth() {
    const token = window.localStorage.getItem('token');
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: "http://localhost:9000/api"
    })
}