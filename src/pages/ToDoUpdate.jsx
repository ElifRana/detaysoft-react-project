import React from 'react'
import { useFormik } from 'formik'
import { useState, useEffect } from 'react'
import ToDoService from '../services/ToDoService'
import { Formik } from 'formik'
import { Button } from 'semantic-ui-react'
import { useParams } from 'react-router'

export default function ToDoUpdate() {

    const [toDos, setToDos] = useState([])

    useEffect(() => {
        let toDoService = new ToDoService()
        toDoService.getAllDto().then(result => setToDos(result.data.data))
    }, [])

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            workerId: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })
    return (
        <Formik
        
        initialValues={{
            id: "",
            name: ""
        }}
        onSubmit={(name, { setSubmitting }) => {
            let toDoService = new ToDoService()
            toDoService.update(name).then()

            setTimeout(() => {
                alert(JSON.stringify(name, null, 2));
                setSubmitting(false);
            }, 400);
        }}

    >
        {({ isSubmitting }) => ( 
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="lastName"> İsim </label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <label htmlFor="email"> Çalışan İd'si </label>
            <input
                id="workerId"
                name="workerId"
                type="workerId"
                onChange={formik.handleChange}
                value={formik.values.workerId}
            />
            <Button  disable={isSubmitting} type="submit">Görev Güncelle</Button>
        </form>
        )}
        </Formik>
    )
}
