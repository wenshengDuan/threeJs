import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>ThreeJs 课程</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
