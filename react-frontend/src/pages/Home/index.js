import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";

function Home() {
  return (
    <div id="page-home">
      <div className="content">
        <header>PostsFinder</header>

        <main>
          <h1>Sua busca de postagens.</h1>
          <p>Faça uma listagem de postagens dos funcionários de cada empresa</p>
          <Link to="/company">
            <span>
              <FiLogIn />
            </span>
            <strong>Listar Postagens</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;
