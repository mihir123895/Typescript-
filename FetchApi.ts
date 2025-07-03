import axios,{AxiosResponse} from "axios"

interface Todo {
    userId: number;
    id:number;
    title:string;
    completed:boolean;
}

const fetchData = async () =>{
    try {
        const respond = AxiosResponse<Todo> = awwait axios.get(" // api");
        console.log("Todo: ",respond.data);
    } catch (error){
        console.log("Error",error);
    }
}