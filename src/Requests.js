const requestGET = (url, signal) => (
  new Promise((resolve, reject) => {
    fetch(url, signal)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch(reject);
  })
);

export { requestGET };
