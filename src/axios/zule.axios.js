import axios from 'axios'

import { base_url } from '../utils/constants.util'

export const getRandomZules = async (offset) =>
    await axios.get(`${base_url}/zules/random?offset=${offset}`)
// export const getRandomZules = async (offset, token) =>
//     await axios.get(`${base_url}/zules/random?offset=${offset}`, { headers: { 'Authorization': `Bearer ${token}` } })
