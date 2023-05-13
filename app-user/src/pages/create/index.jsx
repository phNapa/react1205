import { Button, Container, FormControl, FormLabel, Input, Stack} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form"

const Create = () => {
    const {reset, register, handleSubmit} = useForm()
    const onSubmit = () => {
    }
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    <FormControl>
                        <FormLabel>Nome</FormLabel>
                        <Input type='text' {...register('name',{required:true})} placeholder="Digite o nome" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' {...register('email',{required:true})} placeholder="Digite o email" />
                    </FormControl>
                    <Button colorScheme='gray'>Cadastrar</Button>
                    <Button type="button" onClick={() => reset()} colorScheme='gray'>Limpar</Button>
                </Stack>
            </form>
            <Link to='/'>
                <Button type="button" colorScheme='green'>
                    HOME 
                </Button>
            </Link>
            <Link to='/sobre'>
                <Button type="button" colorScheme='green'>
                    Sobre 
                </Button>
            </Link>
        </Container>
    )
}

export default Create