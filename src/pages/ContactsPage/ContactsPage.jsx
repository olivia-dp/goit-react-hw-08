import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList/ContactList";

const ContactsPage = () => {
    const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(fetchContacts())
      }, [dispatch])
      return (
        <div className="p-5">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Phonebook</h1>
          <ContactForm/>
          <SearchBox/>
          
          <ContactList/>
        </div>
      ) 
    }
    
    export default ContactsPage
    