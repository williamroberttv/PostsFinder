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

  async filtered(request, response) {
    const getFilteredPosts = await axios.get(postsApi).then((res) => {
      const posts = res.data;
      const filteredPosts = posts.filter(
        (post) => post.userId == request.params.id
      );
      return filteredPosts;
    });

    return response.json(getFilteredPosts);
  },
};
