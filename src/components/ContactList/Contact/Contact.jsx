import s from "./Contact.module.css"
import { useDispatch } from 'react-redux';
import { deleteThunkContact, editThunkContact } from "../../../redux/contacts/operations";
import { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Слишком коротко!").required("Обязательное поле"),
        number: Yup.string().matches(/^\d+$/, "Только цифры").required("Обязательное поле"),
    });

    const initialValues = { name, number };
    
    const handleDelete = () => dispatch(deleteThunkContact(id)); 
    
    const handleUpdate = (updatedData) => {
        dispatch(editThunkContact({ id, ...updatedData }));
        setIsEditing(false);
    };

    return (
        <>
            <div>
                <div className={s.cont}>
                    <img className={s.avatar} src={"https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000"} alt="user" width="24" />
                    <p className={s.name}>{name}</p>
                </div>
                <div className={s.cont}>
                    <img className={s.avatar} src={"https://img.icons8.com/?size=100&id=78382&format=png&color=000000"} alt="user" width="24" />
                    <p className={s.number}>{number}</p>
                </div>
            </div>
            
            <button className={s.button} onClick={handleDelete}>Delete</button>
            <button className={s.button} onClick={() => setIsEditing(true)}>Edit</button>

            {isEditing && (
                <div>
                    <h2>Редактировать контакт</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleUpdate}
                    >
                        <Form className="form">
                            <label>Имя</label>
                            <Field type="text" name="name" />

                            <label>Телефон</label>
                            <Field type="text" name="number" />

                            <div className="buttons">
                                <button type="submit">Сохранить</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            )}
        </>
    );
};

export default Contact;