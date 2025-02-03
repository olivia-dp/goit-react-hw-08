import { useSelector } from "react-redux";
import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"
import { selectError, selectFilteredContacts, selectIsLoading } from "../../../redux/contacts/selectors";



const ContactList = () => { 

const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);



    
    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <ul className={s.list}>
                 {contacts.map(({ id, name, number }) => (
                     <li key={id} className={s.listItem}>
                         <Contact
                             id={id}
                            name={name}
                             number={number}
                        
                         />
                         </li>
                ))} 
                     
            </ul>
            {isError && <h2>Something went wrong!</h2>}
            {isLoading && <h2>Loading...</h2>}  
        </div>
          
    );
};

export default ContactList;