import React from "react";
import styled from "styled-components";

function NavbarComponent() {
	return (
		<>
			<NavStyle>
				<header class="header">
					<div class="logo">
						<a href="/"><h1>MilkStgo</h1></a>
					</div>
					<nav class="navbar">
						<ul>
							<li><a href="/">Inicio</a></li>
							<li><a href="/proveedores">Proveedores</a></li>
							<li><a href="/archivos">Archivos</a></li>
							<li><a href="/planilla_pagos">Pagos</a></li>
						</ul>
					</nav>
				</header>
			</NavStyle>
		</>
	)
}

export default NavbarComponent;

const NavStyle = styled.nav`
*{
	margin: 0px;
	padding: 0px;
	}
.header{
	width: 100%;
	height: 150px;
	background-color: lightskyblue;
	border-bottom: 1px solid #ccc;
	}
.logo{
	float: left;
	color: blue;
	padding: 10px;
	margin-top: 50px;
	margin-bottom: 10px;
	margin-left: 10px;
	font-size: 40px;
	font-family: sans-serif;
	line-height: 40px;
	text-shadow: 2px 1px 5px white;
	cursor: pointer;
	overflow: hidden;
	transition: all 200ms;
	}
.logo a{
	text-decoration: none;
	transition: all 200ms;
	}
.logo a:hover{
	color:white;
	text-shadow: 2px 1px 5px blue;
}
.logo:hover{
	border: 1px solid white;
	border-radius: 5px;
	background-color: #2883D4;
	text-shadow: 2px 1px 5px blue;
	padding-left: 10px;
	padding-right: 10px;
	}

.navbar{
	float: right;
	height: 70px;
	margin-top: 50px;
	}
.navbar > ul > li{
	font-size: 24px;
	display: inline-block;
	margin: 0px 20px 0px 20px;
	line-height: 70px;
	letter-spacing: 1px;
	border-right: 1px solid #fff;
	padding-right: 20px;
	}
.navbar > ul > li a{
	display: block;
	text-decoration: none;
	text-transform: uppercase;
	padding: 2px;
	color: #2883D4;
	text-shadow: 2px 1px 5px white;
	transition: all 200ms;
	}

.navbar > ul > li a:hover {
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 5px;
	color: lightskyblue;
	background-color: #2883D4;
	text-shadow: 2px 1px 5px blue;
	border: 1px solid white;
}
`