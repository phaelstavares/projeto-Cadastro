import styled from "styled-components"
import Background from "../../assets/fundo-usuarios.png"
import { Link } from "react-router-dom"

export const Container = styled.div `
    background: url("${Background}");
    background-size: cover; // cobrir toda a tela com a imagem

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    
    height: 100%;
    min-height: 100vh;
`

export const Imagem = styled.img `
    margin-top: 30px;
`

export const ContainerItens = styled.div `
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0 0;

    padding: 50px 36px;
    display: flex;
    flex-direction: column;

    backdrop-filter: blur(45px);

    min-height: calc(100vh - 170px);
`

export const Button = styled(Link) `
    width: 342px;
    height: 74px;
    margin-top: 40px;
    border-radius: 14px;
    background: transparent;
    border: 1px solid #ffffff;
    cursor: pointer;

    font-style: normal;
    font-size: 17px;
    font-weight: bold;
    line-height: 28px;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.6;
    }
`

export const User = styled.li `
    margin-top: 20px;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 58px;

    border: none;
    outline: none;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #ffffff;
    }
    
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`