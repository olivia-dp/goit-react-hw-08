import s from "./Contact.module.css"
import { useDispatch } from 'react-redux';
import { deleteThunkContact } from "../../../redux/contacts/operations";




const Contact = ({ id, name, number}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteThunkContact(id)) 
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
           </>
    )
 };

export default Contact;