import axios from 'axios';

const API_URL = "http://localhost:8080/planillapagos";

class PagosService {
    CrearPlanilla(proveedor) {
        const params = new URLSearchParams();
        params.append('proveedor', proveedor);

        return axios.post(API_URL, null, { params })
            .then(response => response.data)
            .catch(error => {
                throw new Error(`Error al crear la planilla de pago: ${error.message}`);
            });
    }
}

const pagosService = new PagosService();
export default pagosService;