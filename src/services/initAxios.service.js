import axios from "axios";

class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: `https://gallery.fly.dev/${path}`
        })
    }
}

export default InitAxios