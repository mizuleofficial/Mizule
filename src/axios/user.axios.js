import { base_url } from '../utils/constants.util'

export const updateTeaserHistory = async (user_id, userHistory, id_zule, token, type) =>
    await axios.post(`${base_url}/user/history`, { user_id, userHistory, id_zule, type }, { headers: { 'Authorization': `Bearer ${token}` } })
