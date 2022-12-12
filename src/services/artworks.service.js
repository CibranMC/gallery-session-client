import InitAxios from "./initAxios.service";

class ArtWorksAPI extends InitAxios {
    constructor() {
        super('artworks')
    }

    getAllArtworks() {
        return this.axios
            .get(`/?limit=8&offset=0`)
            .then((response) => response.data)
    }

    uploadImage(file) {
        return this.axios.post('/uploadimage', file).then((response) => response.data)
    }

    createArtwork(body) {
        return this.axios.post('/', body).then((response) => response.data)
    }


    getOneArtworkById(id) {
        return this.axios.get(`/${id}`).then((response) => response.data)
    }
}

export default new ArtWorksAPI()