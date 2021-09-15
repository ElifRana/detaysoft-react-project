import React from 'react'
import ExecutiveService from '../services/ExecutiveService'
import ToDoService from '../services/ToDoService'
import WorkerService from '../services/WorkerService'
import { Container, Menu, Header } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

export default function ToDoPage() {

    const [executives, setExecutives] = useState([])
    const [toDos, setToDos] = useState([])
    const [workers, setWorkers] = useState([])

    useEffect(() => {

        let executiveService = new ExecutiveService()
        executiveService.getAll().then(result => setExecutives(result.data.data))

        let toDoService = new ToDoService()
        toDoService.getAllDto().then(result => setToDos(result.data.data))

        let workerService = new WorkerService()
        workerService.getAll().then(result => setWorkers(result.data.data))
    }, [])

    return (
        <Container>
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header>ToDo</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item>
                            <Link to={`/toDoUpdate`} >
                                <a key={toDos.id}><Header as='h4' color='green'> ToDo Güncelle </Header></a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={`/`} >
                                <a key={toDos.id}><Header as='h4' color='green'> ToDo Listesi </Header></a>
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Çalışan</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item>
                            <Link to={`/workerAdd`} >
                                <a key={workers.id}><Header as='h4' color='green'> Çalışan ekle </Header></a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={`/worker`} >
                                <a key={workers.id}><Header as='h4' color='green'> Çalışanlar Listesi </Header></a>
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Yönetici</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item>
                            <Link to={`/executiveAdd`} >
                                <a key={executives.id}><Header as='h4' color='green'> Yönetici ekle </Header></a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={`/executive`} >
                                <a key={executives.id}><Header as='h4' color='green'> Yöneticiler Listesi </Header></a>
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        </Container>
    )
}
