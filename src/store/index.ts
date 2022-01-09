import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import register from './modules/register'
import infoBlock from './modules/infoBlock'
import card from './modules/card'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    infoBlock,
    card,
    register
  }
})
