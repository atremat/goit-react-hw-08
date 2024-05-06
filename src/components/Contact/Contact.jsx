import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { LuUserMinus } from "react-icons/lu";

const Contact = ({ contact, openModal }) => {
  const { id, name, number } = contact;

  return (
    <li className={css.listItem}>
      <div className={css.leftWrapper}>
        <div className={css.nameWrapper}>
          <FaUser />
          <span className={css.name}>{name}</span>
        </div>
        <div className={css.numberWrapper}>
          <FaPhone />
          <span className={css.number}>{number}</span>
        </div>
      </div>
      <div className={css.btnWrapper}>
        <button className={css.btnDelete} onClick={() => openModal(id)}>
          <LuUserMinus className={css.deleteIcon} />
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
