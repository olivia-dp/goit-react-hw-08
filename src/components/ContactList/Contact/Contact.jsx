import { useDispatch } from "react-redux";
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
    <div className="card bg-base-100 shadow-lg rounded-2xl p-4 w-72 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center space-x-3">
        <img
          className="w-10 h-10 rounded-full"
          src="https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000"
          alt="user"
        />
        <div>
          <p className="font-bold text-lg">{name}</p>
          <p className="text-gray-500">{number}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <button className="btn btn-soft btn-accent" onClick={handleDelete}>
          Удалить
        </button>
        <button className="btn btn-soft btn-accent" onClick={() => setIsEditing(true)}>
          Редактировать
        </button>
      </div>

      {isEditing && (
        <div className="absolute top-16 left-0 bg-white p-4 shadow-lg rounded-xl w-64 z-50">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleUpdate}>
            {({ resetForm }) => (
              <Form className="space-y-3">
                <label className="block text-sm font-medium">Имя</label>
                <Field type="text" name="name" className="input input-bordered w-full" />

                <label className="block text-sm font-medium">Телефон</label>
                <Field type="text" name="number" className="input input-bordered w-full" />

                <div className="flex justify-between mt-2">
                  <button type="submit" className="btn btn-soft btn-accent">
                    Сохранить
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => {
                      resetForm();
                      setIsEditing(false);
                    }}
                  >
                    Отменить
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default Contact;
