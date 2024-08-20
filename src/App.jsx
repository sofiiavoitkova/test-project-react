import "./App.css";
import user from "./user.json";

function App() {
  const mail = "mailto:" + user.email;

  return (
    <main className="app">
      <h1>My biography</h1>
      <div>Name: {user.name}</div>
      <div>Skills: {user.skills.css}</div>

      <ul>
        {user.hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>

      <a href={mail}>Email me</a>
    </main>
  );
}

export default App;
