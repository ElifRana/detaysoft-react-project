import axios from 'axios'

export default class WorkerService {
    add(values){
        return axios.post("http://localhost:8080/api/workers/add", values)
    }

    delete(id){
        return axios.post("http://localhost:8080/api/workers/delete?id="+id)
    }

    getAll(){
        return axios.get("http://localhost:8080/api/workers/getAll")
    }
}