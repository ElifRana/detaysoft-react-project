import React, { useEffect, useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import ExecutiveService from '../../services/ExecutiveService'

export default function ExecutiveList() {

    const [executives, setExecutives] = useState([])

    useEffect(() => {
        let executiveService = new ExecutiveService()
        executiveService.getAll().then(result => setExecutives(result.data.data))
    }, [])

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
                    <Table.Body>

                        <Table.Row>
                            <Table.Cell>{executive.firstName}</Table.Cell>
                            <Table.Cell>{executive.lastName}</Table.Cell>
                            <Table.Cell>{executive.email}</Table.Cell>

                            <Table.Cell>
                                <Button color='green'>Yönetici Sil</Button>
                            </Table.Cell>

                        </Table.Row>
                    </Table.Body>

                ))}
        </Table>
    )
}
