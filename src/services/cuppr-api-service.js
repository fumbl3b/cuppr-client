import config from '../config';

const cupprApiService = {
  getReviews() {
    return fetch(`${config.API_ENDPOINT}/reviews`, { headers: {} })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  getComments() {
    return fetch(`${config.API_ENDPOINT}/comments`, { headers: {} })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  postReview(coffee_name, coffee_origin, process_method, roaster_name, body) {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        coffee_name,
        coffee_origin,
        process_method,
        roaster_name,
        body
      })
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        );
  }
}

export default cupprApiService;