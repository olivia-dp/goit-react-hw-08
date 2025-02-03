import { useDispatch } from "react-redux";
import { deleteThunkContact, editThunkContact } from "../../../redux/contacts/operations";
import { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { RiContactsLine } from "react-icons/ri";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const validationSchema = Yup.object().shape({
      name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      number: Yup.string()
        .matches(/^\d+$/, "Number must contain only digits")
        .min(3, "Too Short!")
        .max(15, "Too Long!")
        .required("Required"),
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
        <RiContactsLine className="w-10 h-10 opacity-25"/>
        <div>
          <p className="text-l font-bold text-gray-900">{name}</p>
          <p className="text-gray-500">{number}</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2 justify-end">
        <button className="btn btn-soft btn-accent" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn btn-soft btn-accent" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </div>

      {isEditing && (
        <div className="absolute top-16 left-0 bg-white p-4 shadow-lg rounded-xl w-64 z-50">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleUpdate}>
            {({ resetForm }) => (
              <Form className="space-y-3">
                <label className="block text-sm font-medium">Name</label>
                <Field type="text" name="name" className="input input-bordered w-full" />

                <label className="block text-sm font-medium">Number</label>
                <Field type="text" name="number" className="input input-bordered w-full" />

                <div className="flex gap-2 justify-end mt-2">
                  <button type="submit" className="btn btn-soft btn-accent">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => {
                      resetForm();
                      setIsEditing(false);
                    }}
                  >
                    Cancel
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
