import InitAxios from './initAxios.service';

class AuthAPI extends InitAxios {
    constructor() {
        super('auth')
    }

    registerUser(body) {
        return this.axios.post('/register', body).then((response) => response.data);
    }

    loginUser(body) {
        return this.axios.post('/login', body).then((response) => response.data);
    }
}

export default new AuthAPI();