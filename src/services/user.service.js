import InitAxios from './initAxios.service';

class UserAPI extends InitAxios {
    constructor() {
        super('user')
    }

    me(token) {
        return this.axios.get('/me', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((response) => response.data);
    }

}

export default new UserAPI();