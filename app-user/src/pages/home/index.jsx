//criação do componente Home

import {Button, Container} from "@chakra-ui/react"
import {Link} from "react-router-dom"
//importa hook useUsers
import { useUsers } from "../../hooks/Users"

const Home = () => {
    const {users, error, isLoading} = useUsers()

    return(
        <Container>
            <h1>Pagina Inicial</h1>
            <hr />
            <Link to='/sobre'>
                <Button type="button" colorScheme='green'>
                    Sobre 
                </Button>
            </Link>
            <Link to='/create'>
                <Button type="button" colorScheme='green'>
                    Create 
                </Button>
            </Link>
            <hr />
            {
                isLoading && <p>Carregando...</p>
            }
            {
                error && <p>Erro...</p>
            }
            {
                users?.map((user) => (
                    //user.name retorna apenas o nome
                    <p key={user.id}>{user.name}</p>
                ))
            }
        </Container>
    )
}

export default Home