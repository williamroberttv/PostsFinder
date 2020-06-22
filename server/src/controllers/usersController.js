const axios = require("axios");
const usersApi = "http://jsonplaceholder.typicode.com/users";

module.exports = {
  async index(request, response) {
    const getUsers = await axios.get(usersApi).then((response) => {
      const users = response.data;
      return users;
    });

    return response.json(getUsers);
  },
};
