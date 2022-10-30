import css from './ContactList.module.css'
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from "redux/contacts/contacts-operation";

export function ContactList() {
  
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onRemoveContact = (id) => {
    const action = deleteContact(id);
    dispatch(action);
  }

  return (
    <ul >
      {contacts.map(({ id, name, phone }) => 
        <li className={css.contactList__item} key={id}>{name}: {phone}
          <button className={css.contactList__btn} onClick={()=> onRemoveContact(id)}>Delete</button>          
        </li>
      )}
    </ul>
  )
}