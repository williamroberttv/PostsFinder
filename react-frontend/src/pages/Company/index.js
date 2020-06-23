import React, { useEffect, useState } from "react";
import api from "../../services/api.js";
import company from "../../assets/company.svg";
import { useHistory } from "react-router-dom";

import "./styles.css";

function Company() {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  function getCompanyName(name) {
    localStorage.setItem("company_name", name);
    history.push("/users");
  }

  useEffect(() => {
    api.get("users").then((response) => setUsers(response.data));
  }, []);
  return (
    <div id="page-company">
      <div className="header">
        <h1>Vamos começar</h1>
        <p>Selecione a empresa para listagem de usuários</p>
      </div>
      <div className="posts">
        {users.map((user) => (
          <section
            onClick={() => getCompanyName(user.company.name)}
            className="post-section"
            key={user.id}
          >
            <img src={company} alt="Company" />
            <h3>{user.company.name}</h3>
            <p>{user.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Company;
