import React from "react";
import styled from "styled-components";
import NavbarComponent from "./NavbarComponent";



export default function Archivo(){
    
    return (
        <div className="archivo">
            <NavbarComponent />
            <ArchivoStyle>
                <div class="box-area">
                    <div class="single-box">
                        <a href="/carga-archivo-acopio">
                        <img class="card-img-top img-fluid" src="https://i.postimg.cc/0jfPhTyF/acopio.png" alt="ACOPIO" />
                        </a>
                    </div>
                    <div class="single-box">
                        <a href="/carga-archivo-grasasolido">
                        <img class="card-img-top img-fluid" src="https://i.postimg.cc/MZb6cQm5/grasasysolidos.png" alt="GRASAS-Y-SOLIDOS"/>
                        </a>
                    </div>
                </div>
            </ArchivoStyle>
        </div>
    );
}

const ArchivoStyle = styled.nav`

.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
    color: #fff;
}

.box-area{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.single-box{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: auto;
    border-radius: 4px;
    background-color: #ccc;
    text-align: center;
    margin: 20px;
    padding: 20px;
    transition: .3s
}

.img-area{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border: 6px solid #ddd;
    padding: 20px;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
}

.single-box:hover{
    background: #2883D4;
    }

.login-box{
    cursor: pointer;
}
`