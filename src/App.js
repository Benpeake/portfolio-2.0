import { Route, Routes } from "react-router";
import "./App.css";
import Nav from "./components/nav";
import { BrowserRouter } from "react-router-dom";
import Landing from "./pages/landing";
import Footer from "./components/footer";
import ScrollToAnchor from "./components/scrollToAnchor";
import PixelPad from "./pages/pixel-pad";
import { useState } from "react";

function App() {
  const [onLanding, setOnLanding] = useState(false);

  return (
    <>
      <div className="APP">
        <BrowserRouter>
          <ScrollToAnchor />
          <Nav onLanding={onLanding} />
          <Routes>
            <Route path="/" element={<Landing setOnLanding={setOnLanding} />} />
            <Route
              path="/pixelpad"
              element={<PixelPad setOnLanding={setOnLanding} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
