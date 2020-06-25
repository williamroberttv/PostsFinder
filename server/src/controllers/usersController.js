const { getUsers, getFilteredByCompanyName } = require("../services/api");

module.exports = {
  async index(request, response) {
    const users = await getUsers();
    return response.json(users);
  },
  async show(request, response) {
    const companyName = request.params.company_name;
    const userFiltered = await getFilteredByCompanyName(companyName);
    return response.json(userFiltered);
  },
};
