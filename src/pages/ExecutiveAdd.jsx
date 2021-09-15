import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup";
import { Button } from "semantic-ui-react"
import DetaysoftTextInput from '../utilities/customFormControls/DetaysoftTextInput';
import { useState, useEffect } from 'react'
import ExecutiveService from '../services/ExecutiveService'

export default function ExecutiveAdd() {

    const [executives, setExecutives] = useState([])

    useEffect(() => {
        let executiveService = new ExecutiveService()
        executiveService.getAll().then(result => setExecutives(result.data.data))
    }, [])

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    const schema = Yup.object({
        firstName: Yup.string().required("Yöneticinin ismi zorunlu"),
        lastName: Yup.string().required("Yöneticinin soyismi zorunlu"),
        email: Yup.string().required("Yöneticinin emaili zorunlu"),
        password: Yup.number().required("Yöneticinin parolası zorunlu"),
    });


    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }}

            onSubmit={(values, { setSubmitting }) => {
                let executiveService = new ExecutiveService()
                executiveService.add(values).then()

                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="ui form">
                    <DetaysoftTextInput name="firstName" placeholder="Yöneticinin ismi" />
                    <DetaysoftTextInput name="lastName" placeholder="Yöneticinin soyismi" />
                    <DetaysoftTextInput name="email" placeholder="Email" />
                    <DetaysoftTextInput name="password" placeholder="Parola" />
                    <Button color="green" type="submit" disable={isSubmitting} >
                        Yönetici Ekle
                    </Button>
                </Form>
            )}
        </Formik>
    )
}
