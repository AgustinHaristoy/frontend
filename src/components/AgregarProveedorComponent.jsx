import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import styled from "styled-components";
import ProveedorService from "../services/ProveedorService";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';

export default function AgregarProveedorComponent(props) {

    const initialState = {
        codigo_proveedor: "",
        nombre: "",
        categoria: "",
        retencion: false
    };

    const [input, setInput] = useState(initialState);

    const changeCodigoProveedorHandler = event => {
        setInput({ ...input, codigo_proveedor: event.target.value });
        console.log(input.codigo_proveedor);
    };
    const changeNombreHandler = event => {
        setInput({ ...input, nombre: event.target.value });
        console.log(input.nombre);
    };
    const changeCategoriaHandler = event => {
        setInput({ ...input, categoria: event.target.value });
        console.log(input.categoria);
    };
    const changeRetencionHandler = event => {
        setInput({ ...input, retencion: event.target.value });
        console.log(input.retencion);
    };


    const ingresarProveedor = e => {
        e.preventDefault();
        swal({
            title: "¿Está seguro de que desea ingresar este proveedor?",
            text: "Una vez enviado, no podrá ser modificado.",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true
        }).then(respuesta => {
            if (respuesta) {
                swal("Proveedor ingresado correctamente!", { icon: "success", timer: "3000" });
                let proveedor = { codigo_proveedor: input.codigo_proveedor, nombre: input.nombre, categoria: input.categoria, retencion: input.retencion };
                console.log(input.codigo_proveedor)
                console.log(input.nombre)
                console.log(input.categoria)
                console.log(input.retencion)
                console.log("proveedor => " + JSON.stringify(proveedor));
                ProveedorService.IngresarProveedor(proveedor).then(
                    (res) => {
                    }
                );
            }
            else {
                swal({ text: "Proveedor no ingresado.", icon: "error" });
            }
        });
    };

    return (

        <Styles>
            <div className="home">
                <NavbarComponent />
                <div className="mainclass">
                    <div className="form1">
                        <h1 className="text-center"><b>Agregar Proveedor</b></h1>
                        <div className="formcontainer">
                            <hr></hr>
                            <div className="container">
                                <Form>
                                    <Form.Group className="mb-3" controlId="codigo_proveedor" value={input.codigo_proveedor} onChange={changeCodigoProveedorHandler}>
                                        <Form.Label>Código del proveedor</Form.Label>
                                        <Form.Control type="codigo_proveedor" placeholder="Codigo del proveedor de 5 digitos" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="nombre" value={input.nombre} onChange={changeNombreHandler}>
                                        <Form.Label>Nombre del proveedor</Form.Label>
                                        <Form.Control type="nombre" placeholder="Ejemplo: Colún" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="categoria" value={input.categoria} onChange={changeCategoriaHandler}>
                                        <Form.Label>Categoría del proveedor</Form.Label>
                                        <Form.Control type="categoria" placeholder="Letra Mayúscula entre la A y la D" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="retencion" value={input.retencion} onChange={changeRetencionHandler}>
                                        <Form.Label>Retención</Form.Label>
                                        <select>
                                            <option value="True">true</option>
                                            <option value="False">false</option>
                                        </select>
                                    </Form.Group>

                                </Form>
                            </div>
                            <Button className="boton" onClick={ingresarProveedor}>Registrar Proveedor</Button>
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

input[type=codigo_proveedor], input[type=nombre], input[type=categoria], input[type=retencion]  {
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