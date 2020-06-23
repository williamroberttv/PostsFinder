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
  async show(request, response) {
    const getFilteredByCompanyName = await axios.get(usersApi).then((res) => {
      const users = res.data;
      const filteredByCompanyName = users.filter(
        (user) => user.company.name == request.params.company_name
      );
      return filteredByCompanyName;
    });

    return response.json(getFilteredByCompanyName);
  },
};
