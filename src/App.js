import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Shop from "./components/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
