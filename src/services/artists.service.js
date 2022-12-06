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

    getOneArtistById(id) {
        return this.axios.get(`/${id}`).then((response) => response.data)
    }

}

export default new ArtistAPI()