import React from 'react'
import Navi from './Navi'
import ToDoPage from '../pages/ToDoPage'
import { Container, Grid } from 'semantic-ui-react'
import ToDoList from '../components/toDo/ToDoList'
import { Route } from 'react-router'
import WorkerList from '../components/worker/WorkerList'
import ExecutiveList from '../components/executive/ExecutiveList'
import WorkerAdd from '../pages/WorkerAdd'
import ExecutiveAdd from '../pages/ExecutiveAdd'
import ToDoAdd from '../pages/ToDoAdd'
import ToDoUpdate from '../pages/ToDoUpdate'

export default function Dashboard() {
    return (
        <div>
            <Container>
                <Navi />
                <br></br>
                <br></br>
                <br></br>

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <ToDoPage />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Route exact path="/" component={ToDoList} />
                            <Route exact path="/worker" component={WorkerList} />
                            <Route exact path="/executive" component={ExecutiveList} />
                            <Route exact path="/workerAdd" component={WorkerAdd} />
                            <Route exact path="/toDoAdd" component={ToDoAdd} />
                            <Route exact path="/executiveAdd" component={ExecutiveAdd} />
                            <Route exact path="/toDoUpdate" component={ToDoUpdate} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Container>
        </div>
    )
}
