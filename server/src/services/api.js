const axios = require("axios");
const api = "http://jsonplaceholder.typicode.com";
const usersApi = `${api}/users`;
const postsApi = `${api}/posts`;

// Handle users
function getUsers() {
  const getAllUsers = axios.get(usersApi).then((response) => {
    const users = response.data;
    return users;
  });
  return getAllUsers;
}

async function getFilteredByCompanyName(id) {
  const users = await getUsers();
  const filteredByCompanyName = users.filter((user) => user.company.name == id);
  return filteredByCompanyName;
}

// Handle Posts
function getPosts() {
  const getAllPosts = axios.get(postsApi).then((res) => {
    const posts = res.data;
    return posts;
  });
  return getAllPosts;
}

async function getFilteredById(id) {
  const posts = await getPosts();
  const filteredById = posts.filter((post) => post.userId == id);
  return filteredById;
}

module.exports = {
  getUsers,
  getFilteredByCompanyName,
  getPosts,
  getFilteredById,
};
