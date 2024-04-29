import { useId } from "react";
import css from "./SearchBox.module.css";
import { TbUserSearch } from "react-icons/tb";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";

const SearchBox = () => {
  const searchValueId = useId();
  const dispatch = useDispatch();

  const value = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    contacts.length > 0 && (
      <div className={css.container}>
        <label htmlFor="searchValueId" className={css.label}>
          <TbUserSearch className={css.searchIcon} />
          Find contacts by name
        </label>
        <input
          value={value}
          type="text"
          onChange={handleChange}
          id={searchValueId}
          className={css.input}
        />
      </div>
    )
  );
};

export default SearchBox;
