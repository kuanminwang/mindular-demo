import api from '@/services/api'

export default {
  fetchCards() {
    return api.get(`card/`)
      .then(response => response)
  }
}