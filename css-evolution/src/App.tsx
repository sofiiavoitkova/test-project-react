import './App.scss';

const App = () => {
  return (
    <main className="app">
      <div className="root">
        <label htmlFor="name">Name please</label>
        <br />
        <input className="input" id="name" type="text" />
      </div>
      <div className="root">
        <label htmlFor="proficiency">Most experienced with</label>
        <br />
        <select name="proficiency" className="select">
          <option value="good">React</option>
          <option value="great">Angular</option>
          <option value="super">Vue</option>
        </select>
      </div>
      <div className="root">
        <label htmlFor="experience">Experience</label>
        <br />
        <input className="input" type="number" id="experience" />
      </div>
    </main>
  );
};

export default App;
