const { getPosts, getFilteredById } = require("../services/api");

module.exports = {
  async index(request, response) {
    const allPosts = await getPosts();
    return response.json(allPosts);
  },

  async show(request, response) {
    const id = request.params.id;
    const filtered = await getFilteredById(id);
    return response.json(filtered);
  },
};
