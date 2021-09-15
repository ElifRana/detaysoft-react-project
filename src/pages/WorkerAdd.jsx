import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup";
import { Button } from "semantic-ui-react"
import DetaysoftTextInput from '../utilities/customFormControls/DetaysoftTextInput';
import { useState, useEffect } from 'react'
import WorkerService from '../services/WorkerService'

export default function WorkerAdd() {

    const [workers, setWorkers] = useState([])

    useEffect(() => {
        let workerService = new WorkerService()
        workerService.getAll().then(result => setWorkers(result.data.data))
    }, [])

    const initialValues = {
        workerFirstName: "",
        workerLastName: "",
        workerEmail: "",
        password: ""
    }

    const schema = Yup.object({
        workerFirstName: Yup.string().required("Çalışan ismi zorunlu"),
        workerLastName: Yup.string().required("Çalışan soyismi zorunlu"),
        workerEmail: Yup.string().required("Çalışan emaili zorunlu"),
        password: Yup.number().required("Çalışan parolası zorunlu"),
    });

    return (
        <Formik
            initialValues={{
                workerFirstName: "",
                workerLastName: "",
                workerEmail: "",
                password: ""
            }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
                let workerService = new WorkerService()
                workerService.add(values).then()

                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}

        >
            {({ isSubmitting }) => (
                <Form className="ui form">
                    <DetaysoftTextInput name="workerFirstName" placeholder="Çalışan ismi" />
                    <DetaysoftTextInput name="workerLastName" placeholder="Çalışan soyismi" />
                    <DetaysoftTextInput name="workerEmail" placeholder="Email" />
                    <DetaysoftTextInput name="password" placeholder="Parola" />
                    <Button color="green" type="submit" disable={isSubmitting} >
                        Çalışan Ekle
                    </Button>
                </Form>
            )}
        </Formik>
    )
}
