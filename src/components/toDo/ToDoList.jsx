import React from 'react'
import { Button, Input, Table } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import ToDoService from '../../services/ToDoService'
import { useParams } from "react-router";

export default function ToDoList() {

    const [toDos, setToDos] = useState([])
    const [updateToDoId, setUpdateToDoId] = useState()
    const [updateToDoText, setUpdateToDoText] = useState('')

    let toDoService = new ToDoService()

    let { id } = useParams();

    useEffect(() => {
        toDoService.getAllDto().then(result => setToDos(result.data.data))
        toDoService.delete(id).then(result => setToDos(result.data.data))
    }, [])

    const updateToDo = (id, name) => {
        const toDo = toDos.find(x => x.id == id)
        toDoService.update({
            ...toDo,
            name: name
        })
            .then(() => {
                return toDoService.getAllDto().then(result => setToDos(result.data.data))
            })
            .then(() => {
                setUpdateToDoId(null)
            })
    }

    function clear(id) {
        let toDoService = new ToDoService()
        toDoService.delete(id)
        window.location.reload()
    }

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>İsim</Table.HeaderCell>
                    <Table.HeaderCell>Çalışan İd'si</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            {
                toDos.map((toDo) => (
                    <Table.Body key={toDo.id} >
                        <Table.Row>
                            {
                                toDo.id == updateToDoId ?
                                    <Table.Cell>
                                        <Input defaultValue={toDo.name} onChange={e => setUpdateToDoText(e.target.value)} />
                                    </Table.Cell> :
                                    <Table.Cell>{toDo.name}</Table.Cell>
                            }
                            <Table.Cell>{toDo.workerId}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => clear(toDo.id)} color='green'>Görevi Sil</Button>
                            </Table.Cell>

                            <Table.Cell>
                                {
                                    toDo.id != updateToDoId &&

                                    <Button onClick={() => setUpdateToDoId(toDo.id)} color='green'>Görevi Güncelle</Button>
                                }
                                {
                                    toDo.id == updateToDoId &&
                                    <Button onClick={() => updateToDo(toDo.id, updateToDoText)} color='green'> Kaydet </Button>
                                }
                                {
                                    toDo.id == updateToDoId &&
                                    <Button onClick={() => setUpdateToDoId(null)} color='red'> Vazgeç </Button>
                                }

                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>

                ))}
        </Table>
    )
}
