const requestGET = (url, signal) => (
  new Promise((resolve, reject) => {
    fetch(url, {
      signal,
    })
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch(reject);
  })
);

const requestPOST = (url, data, signal) => (
  new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      signal,
    })
      .then((res) => res.json())
      .then((json) => resolve(json.data))
      .catch(reject);
  })
);

export { requestGET, requestPOST };
