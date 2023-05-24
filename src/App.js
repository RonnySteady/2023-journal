import "./App.css";
import JournalForm from "./components/JournalForm";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img> JOURNAL
      </header>
      <main className="App-main">
        <br></br>
        <JournalForm />
        <br></br>

        <button className="button" type="submit">
          Create
        </button>
        <br></br>
        <br></br>
      </main>
      <footer className="App-footer">Journal App | © R.H. 2023</footer>
    </div>
  );
}

export default App;
