import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/'
const timeout = 60000

const instance = axios.create({ baseURL })

instance.defaults.headers.post['Accept'] = 'application/json'
instance.defaults.timeout = timeout

export { instance }