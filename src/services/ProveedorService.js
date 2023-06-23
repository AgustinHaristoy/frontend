import axios from "axios";

class ProveedorService {
    
    IngresarProveedor(proveedor){
        return axios.post(`http://localhost:8080/proveedores`, proveedor);
    }
}

export default new ProveedorService();