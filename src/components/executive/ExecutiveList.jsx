import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Table, Button } from 'semantic-ui-react'
import ExecutiveService from '../../services/ExecutiveService'

export default function ExecutiveList() {

    let { id } = useParams();

    const [executives, setExecutives] = useState([])

    useEffect(() => {
        let executiveService = new ExecutiveService()
        executiveService.getAll().then(result => setExecutives(result.data.data))
        executiveService.delete(id).then(result => setExecutives(result.data.data))
    }, [])

    function clear(id) {
        let executiveService = new ExecutiveService()
        executiveService.delete(id)
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
                executives.map((executive) => (
                    <Table.Body key={executive.id}>

                        <Table.Row>
                            <Table.Cell>{executive.firstName}</Table.Cell>
                            <Table.Cell>{executive.lastName}</Table.Cell>
                            <Table.Cell>{executive.email}</Table.Cell>

                            <Table.Cell>
                                <Button onClick={() => clear(executive.id)} type='button' color='green'>Yönetici Sil</Button>
                            </Table.Cell>

                        </Table.Row>
                    </Table.Body>

                ))}
        </Table>
    )
}
