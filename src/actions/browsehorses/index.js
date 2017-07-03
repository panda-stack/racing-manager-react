import { post } from 'api/Request'

import { SEARCH } from 'api/ServiceTypes'

import verifyServerFormat from 'utils/request'

/**
 *  @name  searchHorses
 *  @param  {Object} data
 *  @return {Promise}
 */
export const searchHorses = data => {
  return new Promise((resolve, reject) => {
    return post({
      url: SEARCH,
      data
    })
    .then(verifyServerFormat)
    .then((data) => {
      return resolve(data)
    })
    .catch((error) => {
      return reject(error)
    })
  })
}
