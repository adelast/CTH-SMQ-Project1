import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  function Disconnect() {
    console.log("logout");
    navigate("/");
  }

  return (
    <button onClick={() => Disconnect()} className="btnLogout">
      Logout
    </button>
  );
}

export default Logout;