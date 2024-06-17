const URL = "http://jsonplaceholder.typicode.com/users";

const fetchGetUsers = () => {
  return fetch(URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};

export default fetchGetUsers;
