import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Privacy from "./privacy";
import Term from "./terms";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Term />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
