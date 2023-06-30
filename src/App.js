import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from './components/HomeComponent.jsx';
import ArchivosComponent from './components/ArchivosComponent.jsx';
import FileUploadAcopioComponent from './components/FileUploadAcopioComponent';
import FileInformationAcopioComponent from './components/FileInformationAcopioComponent';
import FileUploadGrasaSolidoComponent from './components/FileUploadGrasaSolidoComponent';
import FileInformationGrasaSolidoComponent from './components/FileInformationGrasaSolidoComponent';
import ProveedorComponent from './components/ProveedorComponent';
import AgregarProveedorComponent from './components/AgregarProveedorComponent';
import PagosComponent from './components/PagosComponent';
import MostrarPagosComponent from './components/MostrarPagosComponent';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/archivos" element={<ArchivosComponent />} />
        <Route path= "/carga-archivo-acopio" element={<FileUploadAcopioComponent />} />
        <Route path= "/informacion-archivo-acopio" element={<FileInformationAcopioComponent />} />
        <Route path= "/carga-archivo-grasasolido" element={<FileUploadGrasaSolidoComponent />} />
        <Route path= "/informacion-archivo-grasasolido" element={<FileInformationGrasaSolidoComponent />} />
        <Route path= "/proveedores" element={<ProveedorComponent />} />
        <Route path= "/agregar-proveedor" element={<AgregarProveedorComponent />} />
        <Route path= "/planilla-pagos" element={<PagosComponent />} />
        <Route path= "/mostrar-pagos" element ={<MostrarPagosComponent />} />

      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;