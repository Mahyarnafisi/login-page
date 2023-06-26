import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/home/Home";

import ButtonPrimary from "./components/UI/buttons/ButtonPrimary";
import ButtonSecondary from "./components/UI/buttons/ButtonSecondary";

function App() {
  return (
    <div className="app">
      {/* <Home></Home> */}
      <Login></Login>
    </div>
  );
}

export default App;
