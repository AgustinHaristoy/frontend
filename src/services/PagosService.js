import axios from 'axios';

const API_URL = "http://localhost:8080/planillapagos";

class PagosService {

    CrearPlanilla(proveedor) {
        return axios.post(API_URL, proveedor);
    }
}

export default new PagosService();