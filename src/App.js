import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Privacy from "./privacy";
import Term from "./terms";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/terms" element={<Privacy />} />
        <Route path="/privacy" element={<Term />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
