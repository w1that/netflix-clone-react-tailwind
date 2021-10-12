import { Route, Router } from "react-router";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div className="App">
    <Route exact path="/"><WelcomePage/></Route>
    <Route path ="/login"><LoginPage/></Route>
    </div>
  );
}

export default App;
