import apiUrl from '../apiConfig'
import axios from 'axios'

export const create = token => {
  return axios({
    method: 'POST',
    url: apiUrl + '/storys',
    data: {
      story: {
        title: 'title',
        text: 'text'
      }
    },
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}

export const index = token => {
  return axios({
    url: apiUrl + '/storys',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${user.token}`
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${user.token}`
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}
