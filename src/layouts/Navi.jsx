import React from 'react'
import { Menu, Container, Header } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import ToDoService from '../services/ToDoService'

export default function Navi() {

    const [toDos, setToDos] = useState([])

    useEffect(() => {
        let toDoService = new ToDoService()
        toDoService.getAllDto().then(result => setToDos(result.data.data))
    }, [])

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item >
                        <Header size='medium' color='green'>
                            TODO
                        </Header>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={`/`} >
                            <a key={toDos.id}><Header as='h4' color='green'> Anasayfa </Header></a>
                        </Link>
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Link to={`/toDoAdd`} >
                                <a key={toDos.id}><Header as='h4' color='green'> Görev ekle </Header></a>
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div >
    )

}


