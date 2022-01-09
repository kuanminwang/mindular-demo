import api from '@/services/api'
import AuthService from '../../services/authService'

import {
  LOGIN,
  LOGOUT,
} from './actions.type'

import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";

const state = {
  errors: null,
  token: AuthService.getToken(),
  username: AuthService.getUsername(),
  isAuthenticated: !!AuthService.getToken()
};

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials ) {
    return new Promise((resolve, reject) => {
      context.commit(SET_AUTH, {
        token: '1234',
        username: credentials.username
      });
      resolve({
        token: '1234'
      });
      // api.post("token/", credentials )
      //   .then(({ data }) => {
      //     context.commit(SET_AUTH, {
      //       token: data.token,
      //       username: credentials.username
      //     });
      //     resolve(data);
      //   })
      //   .catch(({ response }) => {
      //     reject()
      //     context.commit(SET_ERROR, response.errors);
      //   });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
};
const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, tokenAndUsername) {
    state.isAuthenticated = true;
    state.token = tokenAndUsername.token;
    state.username = tokenAndUsername.username;
    state.errors = {};
    AuthService.saveToken(state.token, state.username);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.token = {};
    state.username = {};
    state.errors = {};
    AuthService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};