const fetchApiUrl = (path) => {
  return fetch(`http://localhost:3001/api/v1/${path}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(`${path} error`));
};

const fetchAllData = () => {
  return Promise.all([
    fetchApiUrl("destinations"),
    fetchApiUrl("travelers"),
    fetchApiUrl("trips"),
  ]);
};

const addData = (object, property) => {
  return fetch(`http://localhost:3001/api/v1/${property}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  }).then((response) => response.json());
};

export { fetchAllData, addData };
