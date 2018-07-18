import axios from 'axios';

const ROOT_API = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=135798642';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  const request = axios.get(`${ROOT_API}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}