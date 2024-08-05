import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { IoIosContact } from "react-icons/io";
import { BsFillTelephoneForwardFill } from "react-icons/bs";


export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.box}>
      <div className={css.boxText}>
        <p className={css.text}>
          <IoIosContact className={css.contactIcon} />
          {name}
        </p>
        <p className={css.text}>
          <BsFillTelephoneForwardFill className={css.contactIconPhone} />
          {number}
        </p>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
