import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from './components/HomeComponent.jsx';
import ArchivosComponent from './components/ArchivosComponent.jsx';
import FileUploadAcopioComponent from './components/FileUploadAcopioComponent';
import FileInformationAcopioComponent from './components/FileInformationAcopioComponent';
import FileUploadGrasaSolidoComponent from './components/FileUploadGrasaSolidoComponent';
import FileInformationGrasaSolidoComponent from './components/FileInformationGrasaSolidoComponent';
import ProveedorComponent from './components/ProveedorComponent';
import PagosComponent from './components/PagosComponent';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/archivos" element={<ArchivosComponent />} />
        <Route path= "/subir-archivo-acopio" element={<FileUploadAcopioComponent />} />
        <Route path= "/informacion-archivo-acopio" element={<FileInformationAcopioComponent />} />
        <Route path= "/subir-archivo-grasasolido" element={<FileUploadGrasaSolidoComponent />} />
        <Route path= "/informacion-archivo-grasasolido" element={<FileInformationGrasaSolidoComponent />} />
        <Route path= "/proveedores" element={<ProveedorComponent />} />
        <Route path= "/planilla-pagos" element={<PagosComponent />} />

      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;