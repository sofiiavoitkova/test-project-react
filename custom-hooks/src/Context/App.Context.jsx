import React, { useState, useEffect, useContext } from "react";
import { UserContext, useUserData } from "./user-context.js";
import "./style.css";

// const emptyUser = {
//   userName: "",
//   age: 0,
//   email: "",
//   isConfirmed: false,
//   employed: "",
//   confirmUserAccount: function () {},
// };

//const UserContext = createContext(emptyUser);

const userData = {
  userName: "Vitalii",
  age: 99,
  email: "my-favorite-email@email.ua",
  isConfirmed: false,
  employed: "Itera",
};

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => setUser(userData), []);

  const confirmUserAccount = () => {
    setUser({ ...user, isConfirmed: true });
  };

  return (
    <div className="component-1 component">
      {user ? (
        <UserContext.Provider value={{ ...user, confirmUserAccount }}>
          {}
          <Main confirmUserAccount={confirmUserAccount} />
        </UserContext.Provider>
      ) : (
        "loading"
      )}
    </div>
  );
}

function Main() {
  return (
    <main className="component-2 component">
      <UserCard />
    </main>
  );
}

function UserCard() {
  const { userName, isConfirmed } = useContext(UserContext);
  return (
    <div className="component-3 component">
      <h1>
        Hello, {userName} {isConfirmed ? "(Verified)" : "(Unconfirmed)"}
      </h1>
      <UserInfo />
    </div>
  );
}

function UserInfo() {
  const { userName, age, email, isConfirmed, employed, confirmUserAccount } =
    useContext(UserContext);
  return (
    <div className="component-4 component">
      <p>Name: {userName}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Working at: {employed}</p>
      {isConfirmed ? (
        <p>Account Confirmed</p>
      ) : (
        <button onClick={confirmUserAccount}>Please confirm the account</button>
      )}
    </div>
  );
}
