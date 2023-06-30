import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  text-align: center;
	justify-content: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
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
`;

const Link = styled.a`
  font-size: 1.5rem;
`;

const VerticalTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const VerticalTable = styled.div`
	display: table;
	border-collapse: collapse;
	border-spacing: 0 10px;
	min-width: 500px;
  margin-top: 1rem;
  margin: 25px 0;
  font-size: 0.9em;
	align-content:center;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const VerticalTableRow = styled.div`
	display: table-row;	
  justify-content: space-between;
  margin-bottom: 0.5rem;
	border-bottom: 1px solid #dddddd;

	&:nth-of-type(even) {
    background-color: #f3f3f3;
  }
`;

const VerticalTableCellTitle = styled.div`
  display: table-cell;
  width: 250px;
  border: 1px solid #dee2e6;
  background-color: #009879;
  color: #ffffff;
  font-weight: bold;

  > div {
    padding: 8px;
  }
`;

const VerticalTableCellContent = styled.div`
  display: table-cell;
  border: 1px solid #dee2e6;

  > div {
    padding: 8px;
  }
`;

class MostrarPagosComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			planillaPagosEntityList: [],
		};
	}

	componentDidMount() {
		fetch("http://localhost:8080/planillapagos")
			.then((response) => response.json())
			.then((data) => this.setState({ planillaPagosEntityList: data }));
	}

	render() {
		return (
			<div>
				<NavbarComponent />
				<Container className="container-fluid mt-2">
					<Title>Planilla Pagos</Title>
					<div className="m-2">
						<Link href="/planilla-pagos">Generar Pagos Planilla</Link>
					</div>
					<VerticalTableContainer>
						{this.state.planillaPagosEntityList.map((planilla) => (
							<VerticalTable key={planilla.id} className="vertical-table">
								<VerticalTableRow>
									<VerticalTableCellTitle>Quincena</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.quincena}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Código Proveedor</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.proveedor}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Nombre Proveedor</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.nombre}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Total KLS leche</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.total_kls_leche}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Número de días que envío leche</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.dias}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Promedio diario KLS leche</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.promedio_kls_leche}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>%Variación Leche</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.variacion_leche}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>%Grasa</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.grasa}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>%Variación Grasa</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.variacion_grasa}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>%Solidos Totales</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.solidos_totales}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>%Variación ST</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.variacion_st}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Pago por Leche</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.pago_leche}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Pago por Grasa</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.pago_grasa}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Pago por Solidos Totales</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.pago_st}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Bonificación por Frecuencia</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.bonificacion_frecuencia}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Dcto. Variación Leche</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.descuento_leche}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Dcto. Variación Grasa</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.descuento_grasa}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Dcto. Variación ST</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.descuento_st}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Pago Total</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.pago_total}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Monto Retención</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.monto_retencion}</VerticalTableCellContent>
								</VerticalTableRow>
								<VerticalTableRow>
									<VerticalTableCellTitle>Monto Total</VerticalTableCellTitle>
									<VerticalTableCellContent>{planilla.monto_final}</VerticalTableCellContent>
								</VerticalTableRow>
							</VerticalTable>
						))}
					</VerticalTableContainer>
				</Container>
			</div>
		)
	}
}

export default MostrarPagosComponent;



