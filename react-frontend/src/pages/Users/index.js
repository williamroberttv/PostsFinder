import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import userImg from "../../assets/user.svg";
import api from "../../services/api";
import "./styles.css";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { Map, TileLayer, Marker } from "react-leaflet";

function Users() {
  const history = useHistory();
  const companyName = localStorage.getItem("company_name");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (companyName) {
      return;
    } else {
      history.push("/company");
    }
  });

  useEffect(() => {
    api.get(`users/${companyName}`).then((res) => {
      setUsers(res.data);
    });
  });

  function handleBackToCompany() {
    localStorage.clear();
    history.push("/company");
  }
  function handlePosts(id, username) {
    localStorage.setItem("user_id", id);
    localStorage.setItem("username", username);
    history.push("/posts");
  }
  return (
    <div id="page-users">
      <div className="users-header">
        <button onClick={handleBackToCompany}>
          <FiArrowLeft />
          <strong>Empresas</strong>
        </button>
      </div>
      {users.map((user) => (
        <div className="user-section" key={user.id}>
          <div className="user">
            <div className="username-section">
              <img src={userImg} alt="user" />
              <p>{user.username}</p>
              <button onClick={() => handlePosts(user.id, user.username)}>
                <span>
                  <FiSearch />
                </span>
                <strong>Buscar postagens</strong>
              </button>
            </div>
            <div className="user-infos">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Telefone: {user.phone}</p>
              <p>Website: {user.website}</p>
            </div>
          </div>
          <div className="user-address">
            <h3>Endereço</h3>
            <p>
              {user.address.street}, {user.address.suite}, {user.address.city}.
            </p>
            <p>Cep: {user.address.zipcode}</p>
            <div className="map-section">
              <Map
                className="map"
                center={[
                  Number(user.address.geo.lat),
                  Number(user.address.geo.lng),
                ]}
                zoom={13}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[
                    Number(user.address.geo.lat),
                    Number(user.address.geo.lng),
                  ]}
                />
              </Map>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
