import "modern-normalize";
import "./App.css";
import { PiUserSquareFill } from "react-icons/pi";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";

const App = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
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
  );
};

export default App;
