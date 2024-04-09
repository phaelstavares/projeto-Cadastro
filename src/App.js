import React, { useState } from "react";
import { Container, Imagem, ContainerItens, H1, InputLabel, Input, Button, User } from "./styles"
import People from "./assets/img-pessoas-inicio.svg"
import Seta from "./assets/seta-direita.svg"
import Lixeira from "./assets/lixeira.svg"

// JSX
export default function App ()  {
  // React Hooks -> Ferramentas auxiliares
  const [ users, setUsers ] = useState([])


  function addNewUser() {
    setUsers([{ id: Math.random(), nome: "Raphael", idade: 19}])
  }

  return (
    <Container>
      <Imagem alt="logo imagem" src={People}/>
        <ContainerItens>

          <H1>Olá!</H1>

          <InputLabel>Nome</InputLabel>
          <Input placeholder="Nome"></Input>

          <InputLabel>Idade</InputLabel>
          <Input placeholder="Idade"></Input>

          <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Seta}/></Button>

          <ul>
            { users.map(user => (
              <User key={user.id}>
              <p>{user.nome}</p> <p>{user.idade}</p>
              <button><img src={Lixeira} alt="lixeira"/></button>
              </User>
            ))
            }
          </ul>
        </ContainerItens>
    </Container>
  )
}