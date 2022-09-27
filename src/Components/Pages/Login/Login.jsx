import { useState } from "react";

import { useLoginStore } from "./useLoginStore";

import { useFlashMessageStore } from "../../FlashMessages/useFlashMessageStore";

import styled from "styled-components";

const StyledForm = styled.form`
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  input,
  button {
    padding: 10px;
    flex: 1;
    border-radius: 8px;
  }
  button {
    cursor: pointer;
    background-color: #98b68e;
    color: #fff;
    &:hover {
      background-color: #fff;
      color: #98b68e;
    }
  }
`;

const Login = () => {
  const { setLoggedIn, loggedIn, userInfo, userName } = useLoginStore((store) => ({
    setLoggedIn: store.setLoggedIn,
    loggedIn: store.loggedIn,
    userInfo: store.userInfo,
    userName: store.userName,
  }));

  const { setFlashMessage } = useFlashMessageStore((store) => ({
    setFlashMessage: store.setFlashMessage,
  }));

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  };

  const LogMeIn = (e) => {
    e.preventDefault();

    const endPoint = "https://api.mediehuset.net/token";
    const username = user.username;
    const password = user.password;

    const data = { username: username, password: password };

    fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Ok") {
          setLoggedIn(true, data.user, data.username, data.access_token);
          setFlashMessage("Velkommen");
        } else {
          setFlashMessage("Ingen brugere med disse kriterier");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return !loggedIn ? (
    <StyledForm onSubmit={LogMeIn}>
      <input type="text" name="username" onChange={(e) => handleChange(e)} />
      <input type="password" name="password" onChange={(e) => handleChange(e)} />
      <button>login</button>
    </StyledForm>
  ) : (
    <>
      {userInfo.firstname} - {userName}
      <button onClick={() => setLoggedIn(false, "", "", "")}> Logout</button>
    </>
  );
};

export default Login;
