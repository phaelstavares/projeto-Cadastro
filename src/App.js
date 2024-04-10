import React, { useState } from "react";
import { Container, Imagem, ContainerItens, H1, InputLabel, Input, Button, User } from "./styles"
import People from "./assets/img-pessoas-inicio.svg"
import Seta from "./assets/seta-direita.svg"
import Lixeira from "./assets/lixeira.svg"

// JSX
export default function App ()  {
  // React Hooks -> Ferramentas auxiliares
  const [ users, setUsers ] = useState([])
  const [ nome, setNome ] = useState()
  const [ idade, setIdade ] = useState()


  function addNewUser() {
    setUsers([...users,{id: Math.random(), nome, idade}])
    // spread operator (...)
  }

  function changeInputNome(event) {
    setNome(event.target.value)
  }

  function changeInputIdade(event) {
    setIdade(event.target.value)
  }

  return (
    <Container>
      <Imagem alt="logo imagem" src={People}/>
        <ContainerItens>

          <H1>Olá!</H1>

          <InputLabel>Nome</InputLabel>
          <Input onChange={changeInputNome} placeholder="Nome"></Input>

          <InputLabel>Idade</InputLabel>
          <Input onChange={changeInputIdade} placeholder="Idade"></Input>

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