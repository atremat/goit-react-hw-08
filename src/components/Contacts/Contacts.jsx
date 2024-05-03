import { PiUserSquareFill } from "react-icons/pi";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
// import { selectError, selectLoading } from "./redux/contacts/selectors";
const Contacts = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
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

export default Contacts;
