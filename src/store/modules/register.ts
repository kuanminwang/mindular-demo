import api from '@/services/api'
import AuthService from '../../services/authService'

import {
  REGISTER,
} from './actions.type'

import {
  SET_ERROR, SET_INFO_BLOCK
} from './mutations.type'

const state = {
  errors: null,
  token: AuthService.getToken(),
  username: AuthService.getUsername(),
  isAuthenticated: !!AuthService.getToken()
};

const getters = {
  getIsAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [REGISTER](context, credentials ) {
    return new Promise((resolve, reject) => {
      context.commit(SET_INFO_BLOCK, {token: '1234'});
      resolve({token: '1234'})
      // api.post("register/", credentials )
      //   .then(({ data }) => {
      //     context.commit(SET_INFO_BLOCK, data);
      //     resolve(data)
      //   })
      //   .catch(({ response }) => {
      //     reject()
      //     context.commit(SET_ERROR, response.errors);
      //   });
    });
  },
};

const mutations = {
  [SET_INFO_BLOCK](state, data) {
    state.infoBlocks = data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};