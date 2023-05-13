import { Button, Container,} from "@chakra-ui/react"
import {Link} from "react-router-dom"

const Sobre = () => {
    return(
        <Container>
            <h1>Sobre</h1>
            <hr />
            <Link to='/'>
                <Button type="button" colorScheme='green'>
                    HOME 
                </Button>
            </Link>
            <Link to='/create'>
                <Button type="button" colorScheme='green'>
                    Create 
                </Button>
            </Link>
        </Container>
    )
}

export default Sobre