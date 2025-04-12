import { Outlet } from "react-router-dom";
import NavBar from "../../componentes/NavBar";
import Rodape from "../../componentes/Rodape";

export default function PaginaPadrao() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Rodape />
    </>
  );
}
