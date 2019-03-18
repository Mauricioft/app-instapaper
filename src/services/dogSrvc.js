import HTTP from '../plugins/axios'

export default {
  async list(){
    const response = await HTTP.get('breed/appenzeller/images/random')
    return response.data
  },
}