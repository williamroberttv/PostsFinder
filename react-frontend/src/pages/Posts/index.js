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
    if (!userId) {
      history.push("/users");
    }
    api.get(`posts/${userId}`).then((res) => setPostsData(res.data));
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
        <button className="header-back" onClick={handleBackToUser}>
          <FiArrowLeft />
          <strong>Informações do usuário</strong>
        </button>
        <button className="header-new-search" onClick={handleNewSearch}>
          <FiSearch />
          <strong>Realizar nova pesquisa</strong>
        </button>
      </div>
      <div className="posts">
        {postsData.map((post) => (
          <div className="posts-section" key={post.id}>
            <div className="user-title">
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
    </div>
  );
}

export default Posts;
