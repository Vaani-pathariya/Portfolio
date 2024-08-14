import LandingPage from "./pages/LandingPage";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <LandingPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
