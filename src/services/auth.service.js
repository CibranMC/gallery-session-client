import InitAxios from './initAxios.service';

class AuthAPI extends InitAxios {
    constructor() {
        super('auth')
    }

    me(token) {
        return this.axios.get('/', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((response) => response.data);
    }

    cartUpdate(body, token) {

        return this.axios.get('/profile', body, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((response) => response.data)
    }

    registerUser(body) {
        return this.axios.post('/register', body).then((response) => response.data);
    }

    loginUser(body) {
        return this.axios.post('/login', body).then((response) => response.data);
    }

}

export default new AuthAPI();

//req user en el back,usar el middlewarre y pasar por headers el token