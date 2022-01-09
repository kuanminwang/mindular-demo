import cardsService from '@/services/cardsService'

import {
  GET_CARDS,
} from './actions.type'

import { SET_CARD } from './mutations.type';

const state = {
  cards: [],
};

const getters = {
  getCards(state) {
    return state.cards;
  }
};

const actions = {
  [GET_CARDS](context) {
    return new Promise((resolve, reject) => {
      context.commit(SET_CARD, {});
      // cardsService.fetchCards()
      //   .then(({ data }) => {
      //     context.commit(SET_CARD, data);
      //   })
      //   .catch(({ response }) => {
      //     reject()
      //     // context.commit(SET_INFO_BLOCK, response.errors);
      //   });
    });
  },
};

const mutations = {
  [SET_CARD](state, data) {
    state.cards = data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};