import React, { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"

import H1 from "../../components/title/index"
import { Container, Imagem, ContainerItens, Button, User } from "./styles"

import Avatar from "../../assets/img-pessoas-usuarios.svg"
import Seta from "../../assets/seta-esquerda.svg"
import Lixeira from "../../assets/lixeira.svg"

// JSX
export default function Users ()  {
  // React Hooks -> Ferramentas auxiliares
  const [ users, setUsers ] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const {data: newUsers} = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
    }

    fetchUsers()
  }, [])

  // React Hooks -> useEffect (efeito colateral)
  // A minha aplicação inicia (A página carregou, useEffect é chamado)
  // Quando um estado que está no array de dependência do useEffect é alterado

  async function excluirUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const NovoUsers = users.filter(user => user.id !== userId)
    
    setUsers(NovoUsers)
  }

  function goBackPage() {
    navigate("/")
  }

  return (
    <Container>
      <Imagem alt="logo imagem" src={Avatar}/>
        <ContainerItens>

          <H1>Usuários</H1>

          <ul>
            { users.map(user => (
              <User key={user.id}>

              <p>{user.name}</p> <p>{user.age}</p>

              <button onClick={() => excluirUser(user.id)}>
                <img src={Lixeira} alt="lixeira"/>
              </button>
              </User>
            ))
            }
          </ul>

          <Button onClick={goBackPage} to="/"><img alt="seta" src={Seta}/> Voltar</Button>

        </ContainerItens>
    </Container>
  )
}