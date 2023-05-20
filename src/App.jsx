import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
