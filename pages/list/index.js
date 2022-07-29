import {useState, useEffect} from 'react'
import Head from 'next/Head'
import styles from '../../styles/List.module.css'
import { 
  Flex,
  Text,
  Button,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

// const URL_API = 'http://localhost:3333/clients'

import {InputForm} from '../components/input'

export default function List() {

  const [clients, setClients] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false)

  const [id, setId] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [errors, setErrors] = useState({name: null, email: null})
  

  const isValidFormData = () => {
    if(!name) {
      setErrors({name: 'Name is required'})
      return false
    }

    if(!email) {
      setErrors({email: 'Email is required'})
      return false
    }

    if(clients.some(client => client.email === email)) {
      setErrors({email: 'Email already in use'})
      return
    }

    setErrors({})
    return true
  }
  
  const handleSubmitCreateClient = (e) => {
    e.preventDefault()

    if (!isValidFormData()) return
    
    setClients(clients.concat({_id: new Date().getMilliseconds().toString(), name, email}))

    setName('')
    setEmail('')
    toggleFormState()
  }

  const handleSubmitUpdateClient = (e) => {
    e.preventDefault()

    if (!isValidFormData()) return
    
    setClients(clients.map(client => client._id === id ? {name, email, _id: id} : client))

    setName('')
    setEmail('')
    setId(null)
    toggleFormState()
  }

  const handleDeleteClient = (_id) => {
    setClients(clients.filter(client => client._id !== _id))
  }

  const handleChangeName = (text) => {
    setName(text)
  }
  
  const handleChangeEmail = (text) => {
    setEmail(text)
  }
  
  const handleShowUpdateClientForm = (client) => {
   setId(client._id)
   setName(client.name)
   setEmail(client.email)
   setIsFormOpen(true)
  }

  const toggleFormState = () => {
    setIsFormOpen(!isFormOpen)  
  }

  return (
    <>
      <Head>
        <title>Página List</title>
      </Head>

      <div className={styles.container} color="white">

        <Flex color="white" justifyContent="space-between">
          <Text color="black" fontSize="2xl">Lista de clientes</Text>
          <Button colorScheme="blue" onClick={toggleFormState}>{isFormOpen ? "-" : "+"}</Button>
        </Flex>
    
      { isFormOpen && (
        <VStack marginY="1rem" as="form" onSubmit={id ? handleSubmitUpdateClient : handleSubmitCreateClient}>
        <InputForm 
          label="Nome" 
          name="name" 
          value={name} 
          onChange={e => handleChangeName(e.target.value)}
          error={errors.name}
        />

        <InputForm 
          label="Email" 
          name="email" 
          type="email" 
          value={email} 
          onChange={e => handleChangeEmail(e.target.value)}
          error={errors.email}
        />  

        <Button fontSize="sm" alignSelf="flex-end" colorScheme="blue" type="submit">{id? 'Atualizar' : 'Cadastrar'}</Button>
      </VStack>
      )}
        <Table variant='simple' my="10">
          <Thead bgColor="blue.500">
            <Tr>
              <Th textColor="white">Name</Th>
              <Th textColor="white">Email</Th>
              <Th textColor="white">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {clients.map(client => (
              <Tr key={client.email}>
                <Td>{client.name}</Td>
                <Td>{client.email}</Td>
                <Td>
                  <Flex>
                    <Button size="sm" fontSize="smaller" colorScheme="yellow" mr="2" onClick={() => handleShowUpdateClientForm(client)}>Editar</Button>
                    <Button size="sm" fontSize="smaller" colorScheme="red" onClick={() => handleDeleteClient(client._id)}>Remover</Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

      </div>
    </>
  )  
}
