import React, { useState } from 'react';
import NavbarComponent from "./NavbarComponent";
import styled from "styled-components";
import PagosService from '../services/PagosService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import swal from 'sweetalert';

export default function PagosComponent(props) {
	const initialState = {
		codigo_proveedor: ""
	};

	const [codigoProveedor, setCodigoProveedor] = useState(initialState);

	const changeCodigoProveedorHandler = event => {
		setCodigoProveedor({ ...codigoProveedor, codigo_proveedor: event.target.value });
		console.log(codigoProveedor.codigo_proveedor);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		swal({
			title: "¿Está seguro de que desea generar la planilla de pago de este proveedor?",
			text: "Una vez enviado, no podrá ser modificado.",
			icon: "warning",
			buttons: ["Cancelar", "Enviar"],
			dangerMode: true
		}).then(respuesta => {
			if (respuesta) {
				swal("Planilla de pago efectuada correctamente!", { icon: "success", timer: "3000" });
				let proveedor = { codigo_proveedor: codigoProveedor.codigo_proveedor };
				console.log(codigoProveedor.codigo_proveedor)
				console.log("proveedor => " + JSON.stringify(proveedor));
				PagosService.CrearPlanilla(proveedor).then(
					(res) => {
					}
				);
			}
			else {
				swal({ text: "Planilla no generada.", icon: "error" });
			}
		});
	};

	return (
		<Styles>
			<div className="home">
				<NavbarComponent />
				<div classname="mainclass">
					<div className="form1">
						<h1 className="text-center"><b>Crear Planilla de Pagos</b></h1>
						<div className="formcontainer">
							<hr></hr>
							<div className="container">
								<Form>
									<Form.Group className="mb-3" controlId="codigo_proveedor" value={codigoProveedor.codigo_proveedor} onChange={changeCodigoProveedorHandler}>
										<Form.Label>Código del proveedor</Form.Label>
										<Form.Control type="codigo_proveedor" placeholder="Codigo del proveedor de 5 digitos" />
									</Form.Group>
								</Form>
							</div>
							<Button className="boton" onClick={handleSubmit}>Crear Planilla</Button>
							<Button className="boton2" onClick={cancelForm}>Cancel</Button>
						</div>
					</div>
				</div>
			</div>
		</Styles>
	)
}
function cancelForm(){
	window.location.href = '/proveedores';
 }

const Styles = styled.div`
.text-center {
	text-align: center;
	justify-content: center;
	padding-top: 8px;
	font-family: "Arial Black", Gadget, sans-serif;
	font-size: 30px;
	letter-spacing: 0px;
	word-spacing: 2px;
	color: #000000;
	font-weight: 700;
	text-decoration: none solid rgb(68, 68, 68);
	font-style: normal;
	font-variant: normal;
	text-transform: uppercase;
}

.home{
	background-color: #006992;
	margin: 0;
	padding: 0;
}

.mainclass{
	margin-top: 20px;
	display: flex;
	justify-content: center;
	font-family: Roboto, Arial, sans-serif;
	font-size: 15px;
}

.form1{
	border: 9px solid #CED0CE;
	background-color: #DADDD8;
	width: 50%;
	padding: 36px;
}

input[type=codigo_proveedor] {
	width: 100%;
	padding: 16px 8px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	box-sizing: border-box;
}

.container{
	font-size: 20px;
	font-weight: 700;
}

Button {
	background-color: #42bfbb;
	color: white;
	padding: 14px 0;
	margin: 10px 0;
	border: none;
	cursor: grabbing;
	width: 100%;
}

Button:hover {
	opacity: 0.8;
}

.boton2 {
	background-color: #E72000;
	color: white;
	padding: 14px 0;
	margin: 10px 0;
	border: none;
	cursor: grabbing;
	width: 100%;
}

.boton2:hover {
	opacity: 0.8;
}

.formcontainer {
	text-align: left;
	margin: 24px 100px 9px;
}

.container {
	padding: 24px 0;
	text-align:left;
}

span.psw {
	float: right;
	padding-top: 0;
	padding-right: 15px;
}
`