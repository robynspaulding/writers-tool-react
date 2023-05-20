import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Login } from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
