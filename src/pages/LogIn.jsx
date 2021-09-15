import React from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function LogIn() {

    return (

        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Segment inverted>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Şifre'
                                type='password'
                            />
                            <Button color='green' fluid size='large'>
                                Giriş Yap
                            </Button>
                        </Segment>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>

    )
}
