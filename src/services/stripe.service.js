import InitAxios from "./initAxios.service";

class StripeAPI extends InitAxios {
    constructor() {
        super('checkout')
    }
    Payment(body) {
        return this.axios.post('/', body).then((response) => response.data)
    }
}

export default new StripeAPI()