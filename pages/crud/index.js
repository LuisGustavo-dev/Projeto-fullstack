  import Head from 'next/Head'
import styles from '../../styles/Crud.module.css'
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
  } from '@chakra-ui/react'  
import {InputForm} from '../components/input'

export default function Page({ allPosts }) {

	return (
		<>
			<Head>
				<title>Página Crud 2</title>
			</Head>
			<div className={styles.container} color="white">
				<Flex color="white" justifyContent="space-between">
					<Text color="black" fontSize="2xl">Lista de usuários</Text>
					<Button colorScheme="blue">+</Button>
				</Flex>
				<VStack marginY="1rem" as="form">
					<InputForm 
					label="Nome" 
					name="name" 
					/>

					<InputForm 
					label="Email" 
					name="email" 
					type="email"
					/> 

					<br/>

					<InputForm 
					label="Password" 
					name="password" 
					type="password"
					/>  

					<br/>

					<Button fontSize="sm" marginY="1rem" alignSelf="flex-end" colorScheme="blue">Cadastrar</Button>
				</VStack>
				<Table variant='simple' my="10">
					<Thead bgColor="blue.500">
						<Tr>
						<Th textColor="white">Name</Th>
						<Th textColor="white">Email</Th>
						<Th textColor="white">Password</Th>
						<Th textColor="white">Action</Th>
						</Tr>
					</Thead>
					<Tbody>
						{allPosts.map((post, idx) => (
						<Tr key={idx}>
							<Td>{post.name}</Td>
							<Td>{post.email}</Td>
							<Td>{post.password}</Td>
							<Td>
							<Flex>
								<Button size="sm" fontSize="smaller" colorScheme="yellow" mr="2">Editar</Button>
								<Button size="sm" fontSize="smaller" colorScheme="red">Remover</Button>
							</Flex>
							</Td>
						</Tr>
						))}
					</Tbody>
				</Table>
			</div>

			{/* {allPosts.map((post, idx) => (
				<div key={idx}>{post.name}</div>))} */}	
		</>
    )
}

//Chamando a API

export async function getServerSideProps() {
const res = await fetch(`http://localhost:8080/usuario/listar`)
const allPosts = await res.json()

	return {
		props: {
			allPosts: allPosts.map((post) => post)
		}
	}
}