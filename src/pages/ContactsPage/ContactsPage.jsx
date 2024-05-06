import { PiUserSquareFill } from "react-icons/pi";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>

      <div className="main">
        <h1 className="phonebook-header">
          <PiUserSquareFill className="phonebook-icon" />
          Phonebook
        </h1>

        <ContactForm />

        <SearchBox />
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ContactList />
      </div>
    </>
  );
};

export default ContactsPage;
