import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup";
import { Button } from "semantic-ui-react"
import DetaysoftTextInput from '../utilities/customFormControls/DetaysoftTextInput';
import ToDoService from '../services/ToDoService';
import { useState, useEffect } from 'react'

export default function ToDoAdd() {

    const [toDos, setToDos] = useState([])

    useEffect(() => {
        let toDoService = new ToDoService()
        toDoService.getAllDto().then(result => setToDos(result.data.data))
    }, [])

    const initialValues = {
        name: "",
        workerId: "",
    }

    const schema = Yup.object({
        name: Yup.string().required("Görev ismi zorunlu"),
        workerId: Yup.string().required("Çalışan id'si zorunlu"),
    });

    return (

        <Formik
            validationSchema={schema}
            initialValues={{
                id: "",
                name: ""
            }}
            onSubmit={(values, { setSubmitting }) => {
                let toDoService = new ToDoService()
                toDoService.add(values).then()

                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}

        >
            {({ isSubmitting }) => (
                <Form className="ui form">
                    <DetaysoftTextInput name="name" placeholder="Görev ismi" />
                    <DetaysoftTextInput name="workerId" placeholder="Çalışan id'si" />
                    <Button color="green" type="submit" disable={isSubmitting} >
                        Görev Ekle
                    </Button>
                </Form>
            )}
        </Formik>
    )
}
