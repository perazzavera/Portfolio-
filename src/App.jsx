import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PaginaPadrao from "./pages/PaginaPadrao";
import About from "./pages/About";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Home />} />
              <Route path="sobremim" element={<About />} />
              <Route path="projetos" element={<Projetos />} />
              <Route path="contato" element={<Contato />} />
            </Route>
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
