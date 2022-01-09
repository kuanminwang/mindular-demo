const ID_TOKEN_KEY = "id_token";
const ID_KEY = "id_username";
import api from '@/services/api'

export const getToken = () => {
  const token = window.localStorage.getItem(ID_TOKEN_KEY);
  if (token) {
    api.defaults.headers.common['Authorization'] = `Token ${token}`
  }
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const getUsername = () => {
  return window.localStorage.getItem(ID_KEY);
};

export const saveToken = (token, username) => {
  api.defaults.headers.common['Authorization'] = `Token ${token}`
  window.localStorage.setItem(ID_KEY, username);
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_KEY);
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export const redirectToExtension = (token) => {
  const extensionUri = new URLSearchParams(window.location.search).get('extensionUri');
  if (extensionUri) {
    const url = new URL(extensionUri)
    url.searchParams.set(ID_TOKEN_KEY, token)
    window.location.assign(url.href); 
  }
}

export default {
  getToken, saveToken, destroyToken, getUsername, redirectToExtension
}