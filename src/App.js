import logo from "./logo.svg";
import "./App.css";
import ResizableTable from "./components/ResizableTable";

function App() {
  return (
    <div className="App">
      <ResizableTable
        columns={["Column 1", "Column 2", "Column 3", "Column 4"]}
      />
    </div>
  );
}

export default App;
