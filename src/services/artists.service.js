import InitAxios from "./initAxios.service";

class ArtistAPI extends InitAxios {
    constructor() {
        super('artists')
    }

    getAllArtists(page) {
        return this.axios
            .get(`/?limit=9&offset=${page}`)
            .then((response) => response.data)
    }

    createArtist(body) {
        return this.axios.post('/', body).then((response) => response.data)
    }

    uploadImage(file) {
        return this.axios.post('/uploadimage', file).then((response) => response.data)
    }

    getOneArtistById(id) {
        return this.axios.get(`/${id}`).then((response) => response.data)
    }

}

export default new ArtistAPI()