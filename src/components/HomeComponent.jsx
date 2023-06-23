import React from "react";
import styled from "styled-components";
import NavbarComponent from "./NavbarComponent";



export default function Home(){
    
    return (
        <div className="home">
            <NavbarComponent />
            <HomeStyle>
                <div class="box-area">
                    <div class="single-box">
                        <a href="/proveedores">
                        <img class="card-img-top img-fluid" src="https://i.ibb.co/L9ZQXx7/PROVEEDORES.png" alt="PROVEEDORES"/>
                        </a>
                    </div>
                    <div class="single-box">
                        <a href="/archivos">
                        <img class="card-img-top img-fluid" src="https://i.ibb.co/vsF82bK/ARCHIVOS.png" alt="ARCHIVOS"/>
                        </a>
                    </div>
                </div>
            </HomeStyle>
        </div>
    );
}


const HomeStyle = styled.nav`

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
    border-radius: 10px;
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