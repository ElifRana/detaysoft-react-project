import axios from 'axios'

export default class ToDoService {
    add(values){
        return axios.post("http://localhost:8080/api/toDos/add", values)
    }

    delete(id){
        return axios.post("http://localhost:8080/api/toDos/delete?toDoId="+id)
    }

    getAllDto(){
        return axios.get("http://localhost:8080/api/toDos/getAllDto")
    }

    update(toDo){
        return axios.post("http://localhost:8080/api/toDos/update", toDo)
    }

    getByWorkerId(workerId){
        return axios.get("http://localhost:8080/api/toDos/getByWorkerId?workerId"+workerId)
    }
}