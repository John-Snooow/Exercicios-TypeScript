type UserResponse = {
    id: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;// O "as" para fazer a asserção de tipagem e fazer uma conversão de tipagem

//para ultiliza quando o typeScript não sabe qual é a tipagem de um determinado objeto 