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
  postReview(newReview) {
    const { display_name, coffee_name, coffee_origin, process_method, roaster_name, body } = newReview;
    const author_id = 1;
    const roaster_id = 1;
    const reviewToPost = { display_name, coffee_name, coffee_origin, process_method, roaster_name, body, author_id, roaster_id };
    console.log(reviewToPost);
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(reviewToPost)
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        );
  }
}

export default cupprApiService;