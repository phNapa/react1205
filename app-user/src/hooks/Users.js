import { useQuery } from "@tanstack/react-query"

//função async espera resposta
const fetchUsers = async () => {
    //res rescebe dados da api users em json
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}

export const useUsers = () => {
    //funçao fetchUsers devolver data, error, isLoading
    const {data, error, isLoading} = useQuery(['users'],fetchUsers)

    return{
        //data contém o conteudo que trouxe da api
        users:data,
        error,
        //função devolve se carregou ou não
        isLoading
    }
}