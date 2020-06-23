import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./styles.css";
import userImg from "../../assets/user.svg";
import { useHistory } from "react-router-dom";
import { FiSearch, FiArrowLeft } from "react-icons/fi";

function Posts() {
  const history = useHistory();
  const userId = localStorage.getItem("user_id");
  const username = localStorage.getItem("username");
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    if (userId) {
      api.get(`posts/${userId}`).then((res) => setPostsData(res.data));
    } else {
      history.push("/users");
    }
  });

  function handleBackToUser() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");
    history.push("/users");
  }
  function handleNewSearch() {
    localStorage.clear();
    history.push("/company");
  }
  return (
    <div id="posts-page">
      <div className="posts-header">
        <button onClick={handleBackToUser}>
          <FiArrowLeft />
          <strong>Informações do usuário</strong>
        </button>
        <button onClick={handleNewSearch}>
          <FiSearch />
          <strong>Realizar nova pesquisa</strong>
        </button>
      </div>
      {postsData.map((post) => (
        <div className="posts-section" key={post.id}>
          <div className="username-section">
            <img src={userImg} alt="user" />
            <p>{username}</p>
          </div>
          <div className="post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
