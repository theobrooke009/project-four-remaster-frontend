import axios from 'axios'
import { getToken } from './auth'
import { baseUrl } from '../../config.js'


function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}


export function registerUser(formdata) {
  return axios.post(`${baseUrl}/auth/register/`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/auth/login/`, formdata)
}

export function getAllGames() {
  return axios.get(`${baseUrl}/games/`)
}

export function getOneGame(gameId) {
  return axios.get(`${baseUrl}/games/${gameId}/`)
}

export function createGame(formdata) {
  return axios.post(`${baseUrl}/games/`, formdata, headers())
}

export function createComment(gameId, formData) {
  return axios.post(`${baseUrl}/games/${gameId}/comments/`, formData, headers())
}


export function getUser() {
  return axios.get(`${baseUrl}/auth/profile/`, headers())
}

export function likeGame(gameId) {
  return axios.post(`${baseUrl}/games/${gameId}/like/`, null, headers())
}


