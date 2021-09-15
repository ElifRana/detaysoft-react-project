import axios from 'axios'

export default class ExecutiveService {
    add(values){
        return axios.post("http://localhost:8080/api/executives/add", values)
    }

    delete(id){
        return axios.post("http://localhost:8080/api/executives/delete?executiveId"+id)
    }

    getAll(){
        return axios.get("http://localhost:8080/api/executives/getAll")
    }
}
