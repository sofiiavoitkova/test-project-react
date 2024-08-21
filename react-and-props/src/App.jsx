import "./App.css";

function Greeting(props) {
  const { name, ...rest } = props;
  console.log(rest);
  return (
    <h1 className="greeting" {...rest}>
      Hello <i className="emphasize">{name}</i>, Welcome!
    </h1>
  );
}

function App() {
  return (
    <Greeting
      name="Everyone"
      style={{ border: "solid red" }}
      aria-hidden={true}
      id="some-id"
    ></Greeting>
  );
}

export default App;

/*function Greeting(props) {
  const { name } = props;
  return (
    <h1 className="greeting">
      Hello <i className="emphasize">{name}</i>, Welcome!
    </h1>
  );
}

function App() {
  return (
    <Greeting name="Everyone" style={{ border: "solid red"}} aria-hidden></Greeting>
  );
}

export default App;
*/
