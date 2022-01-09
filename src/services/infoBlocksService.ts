import api from '@/services/api'

export default {
  fetchInfoBlocks() {
    return api.get(`info_block/`)
      .then(response => response)
  },
  fetchInfoBlocksByLink(link) {
    return api.post(`info_block/search`, {
      link: link
    }).then(response => response)
  }
}