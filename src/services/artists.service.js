import InitAxios from "./initAxios.service";

class ArtistAPI extends InitAxios {
    constructor() {
        super('artists')
    }

    getAllArtists() {
        return this.axios
            .get(`/?limit=15&offset=0`)
            .then((response) => response.data)
    }

    createArtist(body) {
        return this.axios.post('/', body).then((response) => response.data)
    }

    uploadImage(file) {
        return this.axios.post('/upload', file).then((response) => response.data)
    }

    getOneArtistById(id) {
        return this.axios.get(`/${id}`).then((response) => response.data)
    }

}

export default new ArtistAPI()