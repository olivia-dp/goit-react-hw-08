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
        <>
          <h1>Phonebook</h1>
          <ContactForm/>
          <SearchBox/>
          
          <ContactList/>
        </>
      ) 
    }
    
    export default ContactsPage
    