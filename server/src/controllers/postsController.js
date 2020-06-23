const axios = require("axios");
const postsApi = "http://jsonplaceholder.typicode.com/posts";

module.exports = {
  async index(request, response) {
    const getPosts = await axios.get(postsApi).then((res) => {
      const posts = res.data;
      return posts;
    });

    return response.json(getPosts);
  },

  async show(request, response) {
    const getFilteredById = await axios.get(postsApi).then((res) => {
      const posts = res.data;
      const filteredById = posts.filter(
        (post) => post.userId == request.params.id
      );
      return filteredById;
    });

    return response.json(getFilteredById);
  },
};
