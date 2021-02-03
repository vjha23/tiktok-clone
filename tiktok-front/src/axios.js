import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tiktok-mern-backend-vj.herokuapp.com/'
})

export default instance;