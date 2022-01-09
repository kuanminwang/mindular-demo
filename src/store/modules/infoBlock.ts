import infoBlocksService from '@/services/infoBlocksService'

import {
  GET_INFO_BLOCKS, GET_INFO_BLOCKS_BY_LINK, GET_NEXT_BLOCK, GET_PREVIOUS_BLOCK,
} from './actions.type'

import { CLEAR_INFO_BLOCK_DETAILS, SET_INFO_BLOCK, SET_SEARCHED_INFO_BLOCK, TO_NEXT_INFO_BLOCK, TO_PREVIOUS_INFO_BLOCK } from './mutations.type';

const state = {
  infoBlocks: [],
  searchedInfoBlocks: [],
  currentInfoBlock: null,
  currentInfoBlockIndex: 0
};

const getters = {
  getInfoBlocks(state) {
    return state.infoBlocks;
  }
};

const actions = {
  [GET_INFO_BLOCKS](context) {
    return new Promise((resolve, reject) => {
      infoBlocksService.fetchInfoBlocks()
        .then(({ data }) => {
          context.commit(SET_INFO_BLOCK, data);
        })
        .catch(({ response }) => {
          reject()
          // context.commit(SET_INFO_BLOCK, response.errors);
        });
    });
  },
  [GET_INFO_BLOCKS_BY_LINK](context, link) {
    return new Promise((resolve, reject) => {
      infoBlocksService.fetchInfoBlocksByLink(link)
        .then(({ data }) => {
          context.commit(SET_SEARCHED_INFO_BLOCK, data);
        })
        .catch(({ response }) => {
          reject()
        });
    });
  },
  [GET_NEXT_BLOCK](context, link) {
    return new Promise((resolve, reject) => {
      context.commit(TO_NEXT_INFO_BLOCK);
    });
  },
  [GET_PREVIOUS_BLOCK](context, link) {
    return new Promise((resolve, reject) => {
      context.commit(TO_PREVIOUS_INFO_BLOCK);
    });
  },
};

const mutations = {
  [SET_INFO_BLOCK](state, data) {
    state.infoBlocks = data;
  },
  [SET_SEARCHED_INFO_BLOCK](state, data) {
    state.searchedInfoBlocks = data;
    if (data.length > 0) {
      state.currentInfoBlock = data[0]
      state.currentInfoBlockIndex = 0;
    }
  },
  [CLEAR_INFO_BLOCK_DETAILS](state) {
    state.searchedInfoBlocks = [];
    state.currentInfoBlock = null;
  },
  [TO_PREVIOUS_INFO_BLOCK](state) {
    if (state.currentInfoBlockIndex - 1 >= 0) {
      state.currentInfoBlockIndex = state.currentInfoBlockIndex - 1
    } else {
      state.currentInfoBlockIndex = state.searchedInfoBlocks.length - 1;
    }
    state.currentInfoBlock = state.searchedInfoBlocks[state.currentInfoBlockIndex]
  },
  [TO_NEXT_INFO_BLOCK](state) {
    if (state.currentInfoBlockIndex === state.searchedInfoBlocks.length - 1) {
      state.currentInfoBlockIndex = 0;
    } else {
      state.currentInfoBlockIndex = state.currentInfoBlockIndex + 1;
    }
    state.currentInfoBlock = state.searchedInfoBlocks[state.currentInfoBlockIndex]
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};