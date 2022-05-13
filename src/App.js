import IPv4Addr from "./IPv4Addr";
import "./App.css";
const PORT = process.env.PORT || 3000
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>CIDR Calculator</div>
      </header>
      <IPv4Addr />
      <footer>
        <hr />
        If you find this tool useful, you might enjoy reading my blog:{" "}
        <a href="https://rderik.com">rderik.com</a>
      </footer>
    </div>
  );
}

export default App;
