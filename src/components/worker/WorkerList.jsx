import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import WorkerService from '../../services/WorkerService'
import { useParams } from "react-router";

export default function WorkerList() {

    let { id } = useParams();

    const [workers, setWorkers] = useState([])

    useEffect(() => {
        let workerService = new WorkerService()
        workerService.getAll().then(result => setWorkers(result.data.data))
        workerService.delete(id).then(result => setWorkers(result.data.data))
    }, [])

    function clear(id) {
        let workerService = new WorkerService()
        workerService.delete(id)
        window.location.reload()
    }

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>İsim</Table.HeaderCell>
                    <Table.HeaderCell>Soyisim</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            {
                workers.map((worker) => (
                    <Table.Body key={worker.id}>
                        <Table.Row>
                            <Table.Cell>{worker.workerFirstName}</Table.Cell>
                            <Table.Cell>{worker.workerLastName}</Table.Cell>
                            <Table.Cell>{worker.workerEmail}</Table.Cell>

                            <Table.Cell>
                                <Button onClick={() => clear(worker.id)} type='button' color='green'>Çalışan Sil</Button>
                            </Table.Cell>

                        </Table.Row>
                    </Table.Body>

                ))}
        </Table>
    )
}