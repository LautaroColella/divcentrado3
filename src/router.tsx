import { Navigate, Route, Routes } from "react-router-dom";
import CarouselWrapper from "./components/CarouselWrapper";
import NotFound from "./pages/NotFound";
import Cristian from "./pages/profile/Cristian";
import Lautaro from "./pages/profile/Lautaro";
import Paola from "./pages/profile/Paola";
import Santiago from "./pages/profile/Santiago";
import Silvana from "./pages/profile/Silvana";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/nombre" replace />} />

      <Route path="/nombre" element={<CarouselWrapper />} />
      <Route path="/trabajo" element={<CarouselWrapper />} />
      <Route path="/bitacora" element={<CarouselWrapper />} />
      <Route path="/proyectos" element={<CarouselWrapper />} />

      <Route path="/perfil/lautaro" element={<Lautaro />} />
      <Route path="/perfil/cristian" element={<Cristian />} />
      <Route path="/perfil/santiago" element={<Santiago />} />
      <Route path="/perfil/silvana" element={<Silvana />} />
      <Route path="/perfil/paola" element={<Paola />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
